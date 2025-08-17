import { ContactFormData, FilterResult } from '@/types';

import { badWords, suspiciousPatterns } from '@/constants';
import { EmailVerification } from '@/lib';

export class ContentFilter {
  private static findBadWords(text: string): string[] {
    const lowerText = text.toLowerCase();
    return badWords.filter((word) => lowerText.includes(word.toLowerCase()));
  }

  private static checkSuspiciousPatterns(text: string): boolean {
    return suspiciousPatterns.some((pattern) => pattern.test(text));
  }

  private static validateLength(data: ContactFormData): FilterResult {
    if (data.message.length > 5000) {
      return { isValid: false, reason: 'Message too long (max 5000 characters)' };
    }
    if (data.message.length < 10) {
      return { isValid: false, reason: 'Message too short (min 10 characters)' };
    }
    if (data.name.length > 100) {
      return { isValid: false, reason: 'Name too long (max 100 characters)' };
    }
    return { isValid: true };
  }

  private static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public static async filterContent(data: ContactFormData): Promise<FilterResult> {
    // Validate length
    const lengthCheck = this.validateLength(data);
    if (!lengthCheck.isValid) return lengthCheck;

    // Email verification
    try {
      const emailVerification = await EmailVerification.verifyEmail(data.email);

      if (!emailVerification.isValid || !emailVerification.isDeliverable) {
        return {
          isValid: false,
          reason: emailVerification.reason || 'Email address appears to be invalid',
        };
      }
    } catch (error) {
      // If email verification fails, log it but don't block the user
      console.warn('Email verification service unavailable:', error);
    }

    // Validate email format
    if (!this.validateEmail(data.email)) {
      return { isValid: false, reason: 'Invalid email format' };
    }

    // Check for bad words
    const fullText = `${data.name} ${data.email} ${data.message}`;
    const foundBadWords = this.findBadWords(fullText);

    if (foundBadWords.length > 0) {
      return {
        isValid: false,
        reason: 'Content contains inappropriate language',
        flaggedWords: foundBadWords,
      };
    }

    // Check suspicious patterns
    if (this.checkSuspiciousPatterns(fullText)) {
      return {
        isValid: false,
        reason: 'Content contains suspicious patterns',
      };
    }

    // Additional spam checks
    const messageWords = data.message.split(' ').length;
    const uppercaseRatio = (data.message.match(/[A-Z]/g) || []).length / data.message.length;

    if (uppercaseRatio > 0.5 && data.message.length > 50) {
      return {
        isValid: false,
        reason: 'Excessive use of capital letters detected',
      };
    }

    if (messageWords < 3) {
      return {
        isValid: false,
        reason: 'Message appears to be spam (too few words)',
      };
    }

    return { isValid: true };
  }
}

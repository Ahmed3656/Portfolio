export const badWords = [
  'spam',
  'scam',
  'fraud',
  'hack',
  'hacker',
  'malware',
  'virus',
  'phishing',
  'porn',
  'sex',
  'escort',
  'gambling',
  'casino',
  'betting',
  'lottery',
  'winner',
  'congratulations',
  'urgent',
  'immediate',
  'act now',
  'limited time',
  'free money',
  'guaranteed',
  'no risk',
  'click here',
  'buy now',
  'unsubscribe',
  'weight loss',
  'work from home',
  'easy money',
  'viagra',
  'cialis',
  'crypto',
  'forex',
  'investment',
  'loan',
  'credit repair',
];

export const suspiciousPatterns = [
  /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/, // Credit card patterns
  /\b\d{3}[-.]?\d{2}[-.]?\d{4}\b/, // SSN patterns
  /bitcoin|crypto|investment|forex|trading|roi|profit|millionaire/gi, // Crypto/Money spam
  /click\s+here|download\s+now|act\s+fast/gi, // Suspicious CTAs
  /(http|https):\/\/[^\s]+/gi, // URLs
  /free\s+(trial|offer|gift|prize)/gi, // Matches common spam hooks
  /(100%|guaranteed|risk\s*free|no\s*risk)/gi, // Unrealistic promises
  /\$\d+(,\d{3})*(\.\d{2})?/g, // $$$ amounts
];

export class EmailVerification {
  private static ABSTRACT_API_KEY = process.env.ABSTRACT_API_KEY;

  public static async verifyEmail(email: string): Promise<{
    isValid: boolean;
    isDeliverable: boolean;
    suggestion?: string;
    reason?: string;
  }> {
    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      return {
        isValid: data.deliverability === 'DELIVERABLE',
        isDeliverable: data.deliverability === 'DELIVERABLE',
        reason:
          data.deliverability === 'UNDELIVERABLE'
            ? 'Email address does not exist'
            : data.deliverability === 'RISKY'
              ? 'Email appears to be risky or temporary'
              : data.is_disposable_email?.value
                ? 'Disposable email not allowed'
                : undefined,
      };
    } catch (error) {
      console.error('Email verification failed:', error);
      return {
        isValid: true,
        isDeliverable: true,
        reason: 'Unable to verify email at this time',
      };
    }
  }
}

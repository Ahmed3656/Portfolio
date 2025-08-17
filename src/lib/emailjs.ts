import { ContactFormData } from '@/types';
import emailjs from '@emailjs/browser';

export class EmailService {
  private static SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  private static TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  private static PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  static {
    emailjs.init(this.PUBLIC_KEY);
  }

  public static async sendEmail(data: ContactFormData): Promise<void> {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      sent_date: new Date().toLocaleDateString(),
      message: data.message,
    };

    try {
      const response = await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams);

      if (response.status !== 200) {
        throw new Error(`Email service error: ${response.status}`);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}

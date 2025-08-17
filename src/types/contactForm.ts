export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type FilterResult = {
  isValid: boolean;
  reason?: string;
  flaggedWords?: string[];
};

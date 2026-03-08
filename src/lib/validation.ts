import { z } from "zod";

// Reusable validation schemas for future forms
export const nameSchema = z
  .string()
  .trim()
  .min(1, "Name is required")
  .max(100, "Name must be less than 100 characters");

export const emailSchema = z
  .string()
  .trim()
  .email("Invalid email address")
  .max(255, "Email must be less than 255 characters");

export const messageSchema = z
  .string()
  .trim()
  .min(1, "Message is required")
  .max(1000, "Message must be less than 1000 characters");

export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Utility to safely encode user input for URLs
export const safeEncodeURIComponent = (input: string): string => {
  return encodeURIComponent(input.trim());
};

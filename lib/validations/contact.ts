import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, {
    message: "Nama lengkap minimal 3 karakter.",
  }),
  email: z.string().email({
    message: "Alamat email tidak valid.",
  }),
  subject: z.string().min(5, {
    message: "Subjek pesan minimal 5 karakter.",
  }),
  message: z.string().min(10, {
    message: "Pesan minimal 10 karakter.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

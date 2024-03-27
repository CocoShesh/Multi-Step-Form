import { z } from "zod";

export const UserInfoSchema = z.object({
  name: z.string().refine(value => value.trim() !== "", {
    message: "Name is required",
  }),
  email: z.string().refine(value => value.trim() !== "", {
    message: "Email is required",
  }),
  phoneNumber: z
    .string()
    .refine(value => value.trim() !== "", {
      message: "Phone Number is required",
    })
    .refine(value => /^\d+$/.test(value), {
      message: "Only numbers are allowed",
    })
    .refine(value => value.startsWith("09"), {
      message: "Number should start with 09",
    })
    .refine(value => value.length === 11, {
      message: "Phone number should have 11 digits",
    }),
});

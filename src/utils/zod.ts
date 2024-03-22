import { z } from "zod";

const LoginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .min(6, { message: "Email must be at least 6 characters long" })
    .refine(
      (value) => value.includes("@") && value.split("@")[1].includes("."),
      {
        message: "Invalid email format, please include '@' and a valid domain",
        path: ["email"],
      }
    ),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export default LoginFormSchema;

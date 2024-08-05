import { z } from "zod";

const loginSchema = z.object({
  USERNAME: z.string().min(1, { message: "Username is required" }),
  PASSWORD: z.string().min(1, { message: "Password is required" }),
});

export { loginSchema };

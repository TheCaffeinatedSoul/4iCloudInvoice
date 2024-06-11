import { z } from "zod";

const searchFormSchema = z
  .object({
    ORGANIZATION: z.string().min(1, { message: "Organization is required" }),
    INVOICE_NUMBER: z
      .string()
      .min(1, { message: "Invoice Number is required" }),
    SUPPLIER_NUMBER: z
      .string()
      .min(1, { message: "Supplier Number is required" }),
    SUPPLIER_NAME: z.string().min(1, { message: "Supplier Name is required" }),
    DATE_FROM: z.string().min(1, { message: "From date is required" }),
    DATE_TO: z.string().min(1, { message: "To date is required" }),
  })
  .strict();

export { searchFormSchema };

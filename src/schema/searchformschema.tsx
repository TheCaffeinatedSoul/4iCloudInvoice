import { z } from "zod";

const searchFormSchema = z.object({
  ORGANIZATION: z.string().optional(),
  INVOICE_NUMBER: z.string().optional(),
  SUPPLIER_NUMBER: z.string().optional(),
  SUPPLIER_NAME: z.string().optional(),
  FROM_DATE: z.string().optional(),
  TO_DATE: z.string().optional(),
});

export { searchFormSchema };

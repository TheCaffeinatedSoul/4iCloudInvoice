import { z } from "zod";

const invoiceSchema = z.object({
  ORGANIZATION: z.string().optional(),
  INVOICE_NUMBER: z.string().optional(),
  SUPPLIER_NUMBER: z.string().optional(),
  SUPPLIER_NAME: z.string().optional(),
  FROM_DATE: z.string().optional(),
  TO_DATE: z.string().optional(),
});

const checksSchema = z.object({
  ORGANIZATION: z.string().optional(),
  CHECK_NUMBER: z.string().optional(),
  SUPPLIER_NUMBER: z.string().optional(),
  SUPPLIER_NAME: z.string().optional(),
  FROM_DATE: z.string().optional(),
  TO_DATE: z.string().optional(),
});

export { invoiceSchema, checksSchema };

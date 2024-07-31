import { z } from "zod";

const searchSchema = z.object({
  ORGANIZATION: z.string().optional(),
  INVOICE_NUMBER: z.string().optional(),
  INVOICE_TYPE: z.string().optional(),
  SUPPLIER_NUMBER: z.string().optional(),
  SUPPLIER_NAME: z.string().optional(),
  FROM_DATE: z.string().optional(),
  TO_DATE: z.string().optional(),
  TRANSACTION_NUMBER: z.string().optional(),
  DOCUMENT_NUMBER: z.string().optional(),
  REQUISITION_NUMBER: z.string().optional(),
  BUYER: z.string().optional(),
  PO_NUMBER: z.string().optional(),
  APPROVAL_STATUS: z.string().optional(),
  BANK_NAME: z.string().optional(),
  ASSET_NUMBER: z.string().optional(),
  RECEIPT_NUMBER: z.string().optional(),
  PROPERTY_TYPE: z.string().optional(),
  PREPARER: z.string().optional(),
});

export { searchSchema };

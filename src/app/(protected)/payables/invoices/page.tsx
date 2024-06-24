"use client";
import { getInvoiceBySearch } from "@/service/payables/invoice";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/payables/invoices/invoice-columns";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { z } from "zod";
import { invoiceSchema } from "@/schema/searchformschema";
import SearchableLayout from "@/components/default-layout";

type InvoiceProps = {
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const defaultValues: z.infer<typeof invoiceSchema> = {
  ORGANIZATION: "",
  INVOICE_NUMBER: "",
  SUPPLIER_NUMBER: "",
  SUPPLIER_NAME: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Invoices = ({ searchParams }: InvoiceProps) => {
  return (
    <SearchableLayout
      title="Invoices"
      defaultValues={defaultValues}
      schema={invoiceSchema}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
      searchFunction={getInvoiceBySearch}
      searchParams={searchParams}
    />
  );
};

export default Invoices;

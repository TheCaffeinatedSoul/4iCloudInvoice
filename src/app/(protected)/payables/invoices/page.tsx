"use client";
import { getInvoiceBySearch } from "@/service/payables/invoice";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/payables/invoices/invoice-headers";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { z } from "zod";
import { searchSchema } from "@/schema/searchformschema";
import SearchableLayout from "@/components/layouts/searchable-layout";

type InvoiceProps = {
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const defaultValues: z.infer<typeof searchSchema> = {
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
      schema={searchSchema}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
      searchFunction={getInvoiceBySearch}
      searchParams={searchParams}
    />
  );
};

export default Invoices;

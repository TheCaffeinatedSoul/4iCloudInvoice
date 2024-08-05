"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getInvoiceBySearch } from "@/service/receivables/invoices";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/receivables/invoices/invoice-headers";
import { T_SearchParamsProps } from "@/types/types";
import { z } from "zod";

const defaultValues: z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  INVOICE_NUMBER: "",
  INVOICE_CLASS: "",
  INVOICE_TYPE: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Invoices = ({ searchParams }: T_SearchParamsProps) => {
  return (
    <SearchableLayout
      title="Invoices"
      columns={columns}
      defaultValues={defaultValues}
      schema={searchSchema}
      initialVisibilityState={initialVisibilityState}
      searchFunction={getInvoiceBySearch}
      searchParams={searchParams}
    />
  );
};

export default Invoices;

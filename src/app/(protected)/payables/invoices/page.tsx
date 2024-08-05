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
import { T_SearchParamsProps } from "@/types/types";

const defaultValues: z.infer<typeof searchSchema> = {
  INVOICE_NUMBER: "",
  INVOICE_TYPE: "",
  SUPPLIER_NUMBER: "",
  SUPPLIER_NAME: "",
  FROM_DATE: "",
  TO_DATE: "",
  ORGANIZATION: "",
};

const Invoices = ({ searchParams }: T_SearchParamsProps) => {
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

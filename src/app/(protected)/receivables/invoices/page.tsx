"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getInvoiceBySearch } from "@/service/receivables/invoices";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/receivables/invoices/invoice-headers";

const defaultValues = {
  ORGANIZATION: "",
  TRANSACTION_NUMBER: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Invoices = ({ searchParams }: any) => {
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

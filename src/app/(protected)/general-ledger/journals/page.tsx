"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getInvoiceBySearch } from "@/service/payables/invoice";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/payables/invoices/invoice-headers";

const defaultValues = {
  ORGANIZATION: "",
};
const Journals = ({ searchParams }: any) => {
  return (
    <SearchableLayout
      title="Journals"
      columns={columns}
      defaultValues={defaultValues}
      initialVisibilityState={initialVisibilityState}
      schema={searchSchema}
      searchFunction={getInvoiceBySearch}
      searchParams={searchParams}
    />
  );
};

export default Journals;

"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { getReceiptsBySearch } from "@/service/inventory/receipts";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/inventory/receipts/headers";
import { z } from "zod";

const defaultValues = {
  ORGANIZATION: "",
  RECEIPT_NUMBER: "",
  SUPPLIER_NAME: "",
  SUPPLIER_NUMBER: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Receipts = ({
  searchParams,
}: {
  searchParams: z.infer<typeof serverSideSearchParams>;
}) => {
  return (
    <SearchableLayout
      title="Receipts"
      defaultValues={defaultValues}
      schema={searchSchema}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
      searchParams={searchParams}
      searchFunction={getReceiptsBySearch}
    />
  );
};

export default Receipts;

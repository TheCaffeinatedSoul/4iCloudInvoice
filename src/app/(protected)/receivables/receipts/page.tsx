"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { getReceiptsBySearch } from "@/service/receivables/receipts";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/receivables/receipts/receipt-header";
import { z } from "zod";

type ReceiptsProps = {
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const defaultValues = {
  ORGANIZATION: "",
  BANK_NAME: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Receipts = ({ searchParams }: ReceiptsProps) => {
  return (
    <SearchableLayout
      title="Receipts"
      defaultValues={defaultValues}
      searchFunction={getReceiptsBySearch}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
      schema={searchSchema}
      searchParams={searchParams}
    />
  );
};

export default Receipts;

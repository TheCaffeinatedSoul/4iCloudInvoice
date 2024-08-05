"use client";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/payables/checks/check-headers";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { z } from "zod";
import { searchSchema } from "@/schema/searchformschema";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { getChecksBySearch } from "@/service/payables/payments";
import { T_SearchParamsProps } from "@/types/types";

const defaultValues: z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  DOCUMENT_NUMBER: "",
  SUPPLIER_NUMBER: "",
  SUPPLIER_NAME: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Payments = ({ searchParams }: T_SearchParamsProps) => {
  return (
    <SearchableLayout
      title="Payments"
      defaultValues={defaultValues}
      schema={searchSchema}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
      searchFunction={getChecksBySearch}
      searchParams={searchParams}
    />
  );
};

export default Payments;

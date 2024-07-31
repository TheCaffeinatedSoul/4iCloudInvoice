"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getMtlTrxBySearch } from "@/service/inventory/material-transactions";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/inventory/material-transactions/headers";
import { T_SearchParamsProps } from "@/types/types";
import { z } from "zod";

const defaultValues: z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const MaterialTransactions = ({ searchParams }: T_SearchParamsProps) => {
  return (
    <SearchableLayout
      title="Material Transactions"
      defaultValues={defaultValues}
      schema={searchSchema}
      searchParams={searchParams}
      searchFunction={getMtlTrxBySearch}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
    />
  );
};

export default MaterialTransactions;

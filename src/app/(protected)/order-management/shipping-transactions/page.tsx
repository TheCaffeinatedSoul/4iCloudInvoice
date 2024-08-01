"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getShippingTrxBySearch } from "@/service/order-management/shipping-transactions";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/order-management/shipping-transactions/headers";
import { T_SearchParamsProps } from "@/types/types";
import { z } from "zod";

const defaultValues: z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  STATUS: "",
  FROM_DATE: "",
  TO_DATE: "",
};
const ShippingTransactions = ({ searchParams }: T_SearchParamsProps) => {
  return (
    <SearchableLayout
      title="Shipping Transactions"
      defaultValues={defaultValues}
      schema={searchSchema}
      searchParams={searchParams}
      searchFunction={getShippingTrxBySearch}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
    />
  );
};

export default ShippingTransactions;

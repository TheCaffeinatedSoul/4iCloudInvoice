"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getMoveOrdersBySearch } from "@/service/inventory/move-orders";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/inventory/move-orders/headers";
import { T_SearchParamsProps } from "@/types/types";
import { z } from "zod";

const defaultValues: z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  RECEIPT_NUMBER: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const MoveOrders = ({ searchParams }: T_SearchParamsProps) => {
  return (
    <SearchableLayout
      title="Move Orders"
      defaultValues={defaultValues}
      schema={searchSchema}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
      searchFunction={getMoveOrdersBySearch}
      searchParams={searchParams}
    />
  );
};

export default MoveOrders;

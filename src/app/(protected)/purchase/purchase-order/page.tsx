"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getPOBySearch } from "@/service/purchase/purchase-order";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/purchase-order/headers";
import { T_SearchParamsProps } from "@/types/types";
import { z } from "zod";

const defaultValues: z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  PO_NUMBER: "",
  BUYER: "",
  APPROVAL_STATUS: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const PurchaseOrder = ({ searchParams }: T_SearchParamsProps) => {
  return (
    <SearchableLayout
      title="Purchase Order"
      columns={columns}
      defaultValues={defaultValues}
      initialVisibilityState={initialVisibilityState}
      schema={searchSchema}
      searchFunction={getPOBySearch}
      searchParams={searchParams}
    />
  );
};

export default PurchaseOrder;

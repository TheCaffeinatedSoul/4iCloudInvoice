"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getRequisitionBySearch } from "@/service/purchase/requisition";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/requisition/headers";
import { T_SearchParamsProps } from "@/types/types";
import { z } from "zod";

const defaultValues: z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  REQUISITION_NUMBER: "",
  PREPARER: "",
  FROM_DATE: "",
  TO_DATE: "",
};
const Requisition = ({ searchParams }: T_SearchParamsProps) => {
  return (
    <SearchableLayout
      title="Requisitions"
      columns={columns}
      defaultValues={defaultValues}
      initialVisibilityState={initialVisibilityState}
      schema={searchSchema}
      searchFunction={getRequisitionBySearch}
      searchParams={searchParams}
    />
  );
};

export default Requisition;

"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getRequisitionBySearch } from "@/service/purchase/requisition";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/requisition/headers";

const defaultValues = {
  ORGANIZATION: "",
  REQUISITION_NUMBER: "",
  FROM_DATE: "",
  TO_DATE: "",
};
const Requisition = ({ searchParams }: any) => {
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

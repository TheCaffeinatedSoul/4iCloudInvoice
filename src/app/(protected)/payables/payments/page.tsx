"use client";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/payables/checks/check-headers";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { z } from "zod";
import { checksSchema } from "@/schema/searchformschema";
import SearchableLayout from "@/components/default-layout";
import { getChecksBySearch } from "@/service/payables/payments";

type PaymentProps = {
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const defaultValues: z.infer<typeof checksSchema> = {
  ORGANIZATION: "",
  CHECK_NUMBER: "",
  SUPPLIER_NUMBER: "",
  SUPPLIER_NAME: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Payments = ({ searchParams }: PaymentProps) => {
  return (
    <SearchableLayout
      title="Payments"
      defaultValues={defaultValues}
      schema={checksSchema}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
      searchFunction={getChecksBySearch}
      searchParams={searchParams}
    />
  );
};

export default Payments;

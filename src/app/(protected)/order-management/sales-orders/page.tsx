"use client";
import SearchableLayout from "@/components/layouts/searchable-layout";
import { searchSchema } from "@/schema/searchformschema";
import { getSalesOrderBySearch } from "@/service/order-management/sales-order";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/order-management/sales-orders/headers";
import { z } from "zod";

const defaultValues: z.infer<typeof searchSchema> = {
  ORGANIZATION: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Orders = ({ searchParams }: any) => {
  return (
    <SearchableLayout
      title="Sales Orders"
      searchFunction={getSalesOrderBySearch}
      defaultValues={defaultValues}
      schema={searchSchema}
      searchParams={searchParams}
      columns={columns}
      initialVisibilityState={initialVisibilityState}
    />
  );
};

export default Orders;

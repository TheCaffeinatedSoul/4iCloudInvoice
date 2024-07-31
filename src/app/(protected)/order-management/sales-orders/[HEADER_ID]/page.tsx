import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getSalesOrderDetails } from "@/service/order-management/sales-order";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/order-management/sales-orders/lines";
import { format } from "date-fns";

const SalesOrderDetails = async ({
  params,
}: {
  params: { HEADER_ID: string };
}) => {
  const soData = await getSalesOrderDetails(params.HEADER_ID);

  const cardheader = [
    { title: "Organization", value: soData[0]?.ORGANIZATION_NAME },
    { title: "Order Number", value: soData[0]?.ORDER_NUMBER },
    { title: "Source", value: soData[0]?.ORDER_SOURCE_NAME },
    { title: "Payment Terms", value: soData[0]?.PAYMENT_TERMS },
    { title: "Sales Rep", value: soData[0]?.SALESREP_NAME },
    { title: "Date", value: format(soData[0]?.BOOKED_DATE, "dd-MMM-yyyy") },
  ];

  return (
    <SelectedLayout
      title="Sales Order"
      backLink="/order-management/sales-orders"
      cardDetails={cardheader}
    >
      <div className="px-2">
        {soData ? (
          <DataTable
            title="Lines"
            data={{ data: soData[0]?.oe_lines_all, pageCount: 1 }}
            columns={columns}
            initialVisibilityState={initialVisibilityState}
          />
        ) : (
          <Card className="container flex justify-center items-center min-h-[30vh]">
            No records found
          </Card>
        )}
      </div>
    </SelectedLayout>
  );
};

export default SalesOrderDetails;

import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineDetails } from "@/service/inventory/receipts";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/inventory/receipts/transactions";
import { format } from "date-fns";

async function Line({
  params,
}: {
  params: { RECEIPT_NUMBER: string; LINE_ID: string };
}) {
  const lineData = await getLineDetails(params.RECEIPT_NUMBER, params.LINE_ID);
  const headerCard = [
    { title: "Organization", value: lineData[0]?.TO_ORGANIZATION_NAME },
    { title: "Employee Name", value: lineData[0]?.EMPLOYEE_NAME },
    { title: "Ship-To Address", value: lineData[0]?.SHIP_TO_LOCATION_ADDRESS1 },
    { title: "Category", value: lineData[0]?.CATEGORY },
    { title: "Item", value: lineData[0]?.ITEM_DESCRIPTION },
    { title: "Date", value: format(lineData[0]?.CREATION_DATE, "dd-MMM-yyyy") },
  ];
  return (
    <SelectedLayout
      title="Line"
      backLink={`/inventory/receipts/${params.RECEIPT_NUMBER}`}
      cardDetails={headerCard}
    >
      {lineData[0]?.rcv_transactions ? (
        <div className="px-2">
          <DataTable
            title="Line"
            data={{ data: lineData[0]?.rcv_transactions, pageCount: 1 }}
            columns={columns}
            initialVisibilityState={initialVisibilityState}
          />
        </div>
      ) : (
        <Card className="container flex justify-center items-center min-h-[30vh]">
          No records found
        </Card>
      )}
    </SelectedLayout>
  );
}

export default Line;

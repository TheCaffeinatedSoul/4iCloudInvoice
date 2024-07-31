import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getReceiptDetails } from "@/service/inventory/receipts";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/inventory/receipts/lines";
import { title } from "process";

async function Receipts({ params }: { params: { RECEIPT_NUMBER: string } }) {
  const receiptData = await getReceiptDetails(params.RECEIPT_NUMBER);

  const headerCard = [
    {
      title: "Receipt Number",
      value: receiptData[0]?.RECEIPT_NUM,
    },
    {
      title: "Organization",
      value: receiptData[0]?.ORGANIZATION_NAME,
    },
    { title: "Employee Name", value: receiptData[0]?.EMPLOYEE_NAME },
    {
      title: "Supplier Name",
      value: receiptData[0]?.VENDOR_NAME,
    },
  ];
  return (
    <SelectedLayout
      title="Receipt"
      backLink="/inventory/receipts"
      cardDetails={headerCard}
    >
      {receiptData[0]?.rcv_shipment_lines ? (
        <div className="px-2">
          <DataTable
            title="Receipt Details"
            data={{ data: receiptData[0]?.rcv_shipment_lines, pageCount: 1 }}
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

export default Receipts;

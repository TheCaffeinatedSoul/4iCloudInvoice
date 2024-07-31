import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getReceiptDetails } from "@/service/receivables/receipts";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/receivables/receipts/receipt-history";
import { format } from "date-fns";

async function ReceiptDetails({
  params,
}: {
  params: { RECEIPT_NUMBER: string };
}) {
  const receiptDetails = await getReceiptDetails(params.RECEIPT_NUMBER);

  const cardDetails = [
    { title: "Receipt Number", value: receiptDetails[0]?.receipt_number },
    { title: "Organization", value: receiptDetails[0]?.org_name },
    { title: "Bank Name", value: receiptDetails[0]?.bank_name },
    {
      title: "Amount",
      value: receiptDetails[0]?.currency_code + " " + receiptDetails[0]?.amount,
    },
    {
      title: "Date",
      value: format(receiptDetails[0]?.receipt_date, "dd-MMM-yyyy"),
    },
  ];

  return (
    <SelectedLayout
      title="Receipt"
      backLink="/receivables/receipts"
      cardDetails={cardDetails}
    >
      <div className="px-2">
        {receiptDetails ? (
          <DataTable
            title="Receipt History"
            data={{
              data: receiptDetails[0]?.ar_cash_receipt_history_all,
              pageCount:
                receiptDetails[0]?.ar_cash_receipt_history_all.length > 10
                  ? Math.ceil(
                      receiptDetails[0]?.ar_cash_receipt_history_all.length / 10
                    )
                  : 1,
            }}
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
}

export default ReceiptDetails;

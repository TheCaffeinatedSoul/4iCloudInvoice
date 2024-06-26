import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getTransactionDetails } from "@/service/receivables/invoices";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/receivables/invoices/lines";

async function InvoiceDetails({
  params,
}: {
  params: { TRANSACTION_NUMBER: string };
}) {
  const decodedTransactionNumber = decodeURIComponent(
    params.TRANSACTION_NUMBER
  );
  const transactionDetails = await getTransactionDetails(
    decodedTransactionNumber
  );

  const cardDetails = [
    { title: "Transaction Number", value: decodedTransactionNumber },
  ];

  return (
    <SelectedLayout
      title="Invoice"
      backLink="/receivables/invoices"
      cardDetails={cardDetails}
    >
      <div className="px-2">
        {transactionDetails ? (
          <DataTable
            columns={columns}
            data={{
              data: transactionDetails[0]?.ra_customer_trx_lines_all,
              pageCount:
                transactionDetails[0]?.ra_customer_trx_lines_all?.length > 10
                  ? Math.ceil(
                      transactionDetails[0]?.ra_customer_trx_lines_all?.length /
                        10
                    )
                  : 1,
            }}
            initialVisibilityState={initialVisibilityState}
            title="Lines"
          />
        ) : (
          <Card>No Records Found</Card>
        )}
      </div>
    </SelectedLayout>
  );
}

export default InvoiceDetails;

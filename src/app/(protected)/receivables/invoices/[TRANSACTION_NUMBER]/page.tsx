import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getTransactionDetails } from "@/service/receivables/invoices";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/receivables/invoices/lines";
import { format } from "date-fns";

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
    { title: "Transaction Number", value: transactionDetails[0]?.trx_number },
    { title: "Organization", value: transactionDetails[0]?.org_name },
    { title: "Term", value: transactionDetails[0]?.term_name },
    { title: "Source", value: transactionDetails[0]?.batch_source_name },
    { title: "Invoice Type", value: transactionDetails[0]?.cust_trx_type_name },
    {
      title: "Date",
      value: format(transactionDetails[0]?.trx_date, "dd-MMM-yyyy"),
    },
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
          <Card className="container flex justify-center items-center min-h-[30vh]">
            No records found
          </Card>
        )}
      </div>
    </SelectedLayout>
  );
}

export default InvoiceDetails;

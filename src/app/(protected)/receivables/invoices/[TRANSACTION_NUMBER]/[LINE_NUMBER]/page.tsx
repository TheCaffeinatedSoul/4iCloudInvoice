import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineDetails } from "@/service/receivables/invoices";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/receivables/invoices/distributions";

const Line = async ({
  params,
}: {
  params: {
    TRANSACTION_NUMBER: string;
    LINE_NUMBER: number;
  };
}) => {
  const lineData = await getLineDetails(
    params.TRANSACTION_NUMBER,
    params.LINE_NUMBER
  );
  const cardHeader = [
    { title: "Transaction Number", value: lineData.data[0]?.trx_number },
    { title: "Organization", value: lineData.data[0]?.operating_unit },
    { title: "Description", value: lineData.data[0]?.description },
    { title: "Amount", value: lineData.data[0]?.revenue_amount },
  ];

  return (
    <SelectedLayout
      title="Line"
      backLink={`/receivables/invoices/${params.TRANSACTION_NUMBER}`}
      cardDetails={cardHeader}
    >
      <div className="px-2">
        {lineData ? (
          <DataTable
            title="Distributions"
            data={{
              data: lineData.data[0].ra_cust_trx_line_gl_dist_all,
              pageCount: 1,
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
};

export default Line;

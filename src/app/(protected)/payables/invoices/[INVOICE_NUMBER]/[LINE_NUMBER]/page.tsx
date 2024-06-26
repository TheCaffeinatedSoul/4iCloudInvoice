import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineDetails } from "@/service/payables/invoice";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/payables/invoices/distributions";

const Line = async ({
  params,
}: {
  params: {
    INVOICE_NUMBER: string;
    LINE_NUMBER: number;
  };
}) => {
  const lineData = await getLineDetails(
    params.INVOICE_NUMBER,
    params.LINE_NUMBER
  );

  const cardHeader = [
    { title: "Invoice Number", value: lineData.data[0]?.invoice_num },
  ];
  return (
    <SelectedLayout
      title="Line"
      backLink={`/payables/invoices/${params.INVOICE_NUMBER}`}
      cardDetails={cardHeader}
    >
      <div className="px-2">
        {lineData ? (
          <DataTable
            title="Distributions"
            data={{
              data: lineData.data[0].ap_invoice_distributions_all,
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

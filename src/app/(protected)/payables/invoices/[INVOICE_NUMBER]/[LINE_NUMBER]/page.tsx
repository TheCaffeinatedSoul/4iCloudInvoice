import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineDetails } from "@/service/payables/invoice";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/payables/invoices/distributions";
import { format } from "date-fns";

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
    { title: "Organization", value: lineData.data[0]?.operating_unit },
    { title: "Description", value: lineData.data[0]?.default_dist_desc },
    { title: "Invoice Number", value: lineData.data[0]?.invoice_num },
    { title: "Ledger Name", value: lineData.data[0]?.ledger_name },
    { title: "Line Source", value: lineData.data[0]?.line_source_meaning },
    {
      title: "Line Type",
      value: lineData.data[0]?.line_type_lookup_code_meaning,
    },
    { title: "Period", value: lineData.data[0]?.period_name },
    {
      title: "Accounting Date",
      value: format(
        lineData.data[0]?.accounting_date.split(" ")[0],
        "dd-MMM-yyyy"
      ),
    },
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

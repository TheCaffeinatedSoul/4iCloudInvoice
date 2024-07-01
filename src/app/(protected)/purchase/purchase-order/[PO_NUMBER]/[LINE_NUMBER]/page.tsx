import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineDetails } from "@/service/purchase/purchase-order";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/purchase-order/line-locations";

const POLine = async ({
  params,
}: {
  params: {
    PO_NUMBER: string;
    LINE_NUMBER: string;
  };
}) => {
  const lineData = await getLineDetails(params.PO_NUMBER, params.LINE_NUMBER);

  const cardHeader = [
    { title: "PO Number", value: lineData?.data[0]?.po_number },
  ];

  return (
    <SelectedLayout
      title="Line"
      backLink={`/purchase/purchase-order/${params.PO_NUMBER}`}
      cardDetails={cardHeader}
    >
      <div className="px-2">
        {lineData ? (
          <DataTable
            title="Line Locations"
            data={{
              data: lineData?.data[0]?.po_lines_locations_all,
              pageCount:
                lineData?.data[0].po_lines_locations_all.length > 10
                  ? Math.ceil(
                      lineData?.data[0].po_lines_locations_all.length / 10
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
};

export default POLine;

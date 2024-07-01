import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineLocationDetails } from "@/service/purchase/purchase-order";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/purchase-order/distributions";

const LineLocation = async ({
  params,
}: {
  params: { PO_NUMBER: string; LINE_NUMBER: string; LINE_LOCATION_ID: string };
}) => {
  const lineLocationData = await getLineLocationDetails(
    params.PO_NUMBER,
    params.LINE_LOCATION_ID
  );
  const cardHeader = [{ title: "Line number", value: 1 }];
  return (
    <SelectedLayout
      title="Line Location"
      backLink={`/purchase/purchase-order/${params.PO_NUMBER}/${params.LINE_NUMBER}`}
      cardDetails={cardHeader}
    >
      <div className="px-2">
        {lineLocationData ? (
          <DataTable
            title="Distributions"
            data={{ data: lineLocationData, pageCount: 1 }}
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

export default LineLocation;

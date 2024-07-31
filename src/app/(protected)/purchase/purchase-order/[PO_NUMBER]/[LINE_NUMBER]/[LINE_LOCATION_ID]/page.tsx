import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineLocationDetails } from "@/service/purchase/purchase-order";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/purchase-order/distributions";
import { format } from "date-fns";

const LineLocation = async ({
  params,
}: {
  params: { PO_NUMBER: string; LINE_NUMBER: string; LINE_LOCATION_ID: string };
}) => {
  const lineLocationData = await getLineLocationDetails(
    params.PO_NUMBER,
    params.LINE_LOCATION_ID
  );
  const cardHeader = [
    { title: "Organization", value: lineLocationData[0]?.org_name },
    { title: "Line Number", value: lineLocationData[0]?.po_line_num },
    {
      title: "Match Approval Level",
      value: lineLocationData[0]?.Match_approval_level,
    },
    {
      title: "Buyer Address",
      value:
        lineLocationData[0]?.ship_to_location_address1 +
        ", " +
        lineLocationData[0]?.ship_to_Region_1 +
        ", " +
        lineLocationData[0]?.ship_to_town_or_city,
    },
    {
      title: "Date",
      value: format(lineLocationData[0]?.need_by_date, "dd-MMM-yyyy"),
    },
  ];
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
            data={{
              data: lineLocationData[0]?.po_distributions_all,
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

export default LineLocation;

import SelectedLayout from "@/components/layouts/selected-layout";
import { DataTable } from "@/components/ui/data-table";
import { getDetailsByPONumber } from "@/service/purchase/purchase-order";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/purchase-order/lines";
import { format } from "date-fns";

async function PODetails({
  params,
}: {
  params: {
    PO_NUMBER: string;
  };
}) {
  const decodedPONumber = decodeURIComponent(params.PO_NUMBER);
  const poData = await getDetailsByPONumber(decodedPONumber);

  const headerCard = [
    { title: "Organization", value: poData[0]?.org_name },
    { title: "Agent", value: poData[0]?.agent_name },
    { title: "PO Number", value: poData[0]?.po_number },
    { title: "Supplier", value: poData[0]?.vendor_name },
    {
      title: "Supplier Location",
      value:
        poData[0]?.vendor_address1 +
        ", " +
        poData[0]?.city +
        ", " +
        poData[0]?.state,
    },
    {
      title: "Buyer Location",
      value:
        poData[0]?.bill_to_location_address1 +
        ", " +
        poData[0]?.bill_to_location_region_1 +
        ", " +
        poData[0]?.bill_to_location_town_or_city +
        " - " +
        poData[0]?.bill_to_location_postal_code,
    },
    { title: "Status", value: poData[0]?.authorization_status },
    {
      title: "Date",
      value: format(poData[0]?.submit_date?.split(" ")[0], "dd-MMM-yyyy"),
    },
  ];

  return (
    <SelectedLayout
      title="Purchase Order"
      backLink="/purchase/purchase-order"
      cardDetails={headerCard}
    >
      <div className="px-2">
        <DataTable
          title="Lines"
          data={{
            data: poData[0]?.po_lines_all.sort(
              (a: any, b: any) => a.line_num - b.line_num
            ),
            pageCount:
              poData[0]?.po_lines_all.length > 10
                ? Math.ceil(poData[0]?.po_lines_all.length / 10)
                : 1,
          }}
          columns={columns}
          initialVisibilityState={initialVisibilityState}
        />
      </div>
    </SelectedLayout>
  );
}

export default PODetails;

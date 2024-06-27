import SelectedLayout from "@/components/layouts/selected-layout";
import { DataTable } from "@/components/ui/data-table";
import { getDetailsByPONumber } from "@/service/purchase/purchase-order";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/purchase-order/lines";

async function PODetails({
  params,
}: {
  params: {
    PO_NUMBER: string;
  };
}) {
  const decodedPONumber = decodeURIComponent(params.PO_NUMBER);
  const poData = await getDetailsByPONumber(decodedPONumber);

  const headerCard = [{ title: "PO Number", value: poData[0]?.po_number }];

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

import SelectedLayout from "@/components/layouts/selected-layout";
import { DataTable } from "@/components/ui/data-table";
import { getDetailsByRequisitionNumber } from "@/service/purchase/requisition";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/requisition/lines";

async function RequisitionDetails({
  params,
}: {
  params: { REQUISITION_NUMBER: string };
}) {
  const decodedRequisitionNumber = decodeURIComponent(
    params.REQUISITION_NUMBER
  );
  const requisitionData = await getDetailsByRequisitionNumber(
    decodedRequisitionNumber
  );

  const headerCard = [
    {
      title: "Requisition Number",
      value: requisitionData[0]?.requisition_number,
    },
  ];

  return (
    <SelectedLayout
      title="Requisition"
      backLink="/purchase/requisition"
      cardDetails={headerCard}
    >
      <div className="px-2">
        <DataTable
          title="Lines"
          data={{
            data: requisitionData[0]?.requisition_lines.sort(
              (a: any, b: any) => a.line_num - b.line_num
            ),
            pageCount:
              requisitionData[0]?.requisition_lines.length > 10
                ? Math.ceil(requisitionData[0]?.requisition_lines.length / 10)
                : 1,
          }}
          columns={columns}
          initialVisibilityState={initialVisibilityState}
        />
      </div>
    </SelectedLayout>
  );
}

export default RequisitionDetails;

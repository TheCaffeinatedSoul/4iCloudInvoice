import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getMoveOrderDetails } from "@/service/inventory/move-orders";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/inventory/move-orders/request-lines";

async function MoveOrderDetails({ params }: { params: { HEADER_ID: string } }) {
  const moveOrderData = await getMoveOrderDetails(params.HEADER_ID);
  const headerCard = [
    { title: "Organization Name", value: moveOrderData[0]?.ORGANIZATION_NAME },
  ];

  return (
    <SelectedLayout
      title="Move Order"
      backLink="/inventory/move-orders"
      cardDetails={headerCard}
    >
      <div className="px-2">
        {moveOrderData[0]?.mtl_txn_request_lines ? (
          <DataTable
            title="Move Order Lines"
            data={{
              data: moveOrderData[0]?.mtl_txn_request_lines,
              pageCount:
                moveOrderData[0]?.mtl_txn_request_lines.length > 10
                  ? Math.ceil(
                      moveOrderData[0]?.mtl_txn_request_lines.length / 10
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
}

export default MoveOrderDetails;

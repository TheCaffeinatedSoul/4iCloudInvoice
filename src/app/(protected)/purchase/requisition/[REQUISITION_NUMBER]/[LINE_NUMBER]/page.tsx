import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineDetails } from "@/service/purchase/requisition";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/purchase/requisition/distributions";

const Line = async ({
  params,
}: {
  params: {
    REQUISITION_NUMBER: string;
    LINE_NUMBER: number;
  };
}) => {
  const lineData = await getLineDetails(
    params.REQUISITION_NUMBER,
    params.LINE_NUMBER
  );

  const cardHeader = [{ title: "Requisition Number" }];

  return (
    <SelectedLayout
      title="Line"
      backLink={`/purchase/requisition/${params.REQUISITION_NUMBER}`}
      cardDetails={cardHeader}
    >
      <div className="px-2">
        {lineData ? (
          <DataTable
            title="Distributions"
            data={{
              data: lineData?.data[0]?.requisition_distributions,
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

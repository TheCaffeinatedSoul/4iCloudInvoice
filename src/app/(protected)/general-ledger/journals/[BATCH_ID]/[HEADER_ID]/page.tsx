import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineDetails } from "@/service/general-ledger/journals";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/general-ledger/journals/lines";

const Line = async ({
  params,
}: {
  params: {
    BATCH_ID: string;
    HEADER_ID: string;
  };
}) => {
  const lineData = await getLineDetails(params.BATCH_ID, params.HEADER_ID);

  const cardHeader = [
    { title: "Batch Name", value: lineData.data[0].je_batch_name },
  ];
  return (
    <SelectedLayout
      title="Line"
      backLink={`/general-ledger/journals/${params.BATCH_ID}`}
      cardDetails={cardHeader}
    >
      <div className="px-2">
        {lineData ? (
          <DataTable
            title="Lines"
            data={{ data: lineData.data[0].gl_je_lines, pageCount: 1 }}
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

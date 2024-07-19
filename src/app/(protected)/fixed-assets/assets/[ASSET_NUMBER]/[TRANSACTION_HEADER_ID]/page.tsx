import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { getDepreciationDetails } from "@/service/fixed-assets/assets";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/fixed-assets/assets/depreciations";
import { z } from "zod";

async function Depreciations({
  params,
  searchParams,
}: {
  params: { ASSET_NUMBER: string; TRANSACTION_HEADER_ID: string };
  searchParams: z.infer<typeof serverSideSearchParams>;
}) {
  const depreciationDetails = await getDepreciationDetails(
    params.ASSET_NUMBER,
    params.TRANSACTION_HEADER_ID,
    searchParams.limit,
    searchParams.page
  );

  const cardHeader = [{ title: "Asset number", value: params.ASSET_NUMBER }];

  return (
    <SelectedLayout
      title="Depreciation"
      backLink={`/fixed-assets/assets/${params.ASSET_NUMBER}`}
      cardDetails={cardHeader}
    >
      <div className="px-2">
        {depreciationDetails ? (
          <DataTable
            title="Depreciation Details"
            data={depreciationDetails}
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

export default Depreciations;

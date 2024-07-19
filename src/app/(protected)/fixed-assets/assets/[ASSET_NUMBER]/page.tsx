import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAssetDetailsByAssetId } from "@/service/fixed-assets/assets";
import {
  columns as booksColumns,
  initialVisibilityState as booksInitialVisibilityState,
} from "@/types/columndefs/fixed-assets/assets/books";
import {
  columns as assignmentsColumns,
  initialVisibilityState as assignmentsInitialVisibilityState,
} from "@/types/columndefs/fixed-assets/assets/assignments";

async function AssetDetails({ params }: { params: { ASSET_NUMBER: string } }) {
  const assetid = params.ASSET_NUMBER;
  const assetDetails = await getAssetDetailsByAssetId(assetid);
  const headerCard = [
    { title: "Asset Number", value: assetDetails[0]?.asset_number },
  ];

  return (
    <SelectedLayout
      title="Assets"
      backLink="/fixed-assets/assets"
      cardDetails={headerCard}
    >
      <Tabs defaultValue="books" className="px-4 mb-4">
        <TabsList className="flex justify-evenly w-full">
          <TabsTrigger value="books" className="flex gap-2 w-full">
            Books
          </TabsTrigger>
          <TabsTrigger value="assignments" className="flex gap-2 w-full">
            Assignments
          </TabsTrigger>
        </TabsList>
        <TabsContent value="books">
          {assetDetails[0]?.fa_books ? (
            <DataTable
              title="Books"
              data={{
                data: assetDetails[0]?.fa_books,
                pageCount:
                  assetDetails[0]?.fa_books?.length > 10
                    ? Math.ceil(assetDetails[0]?.fa_books?.length / 10)
                    : 1,
              }}
              columns={booksColumns}
              initialVisibilityState={booksInitialVisibilityState}
            />
          ) : (
            <Card className="container flex justify-center items-center min-h-[30vh]">
              No records found
            </Card>
          )}
        </TabsContent>
        <TabsContent value="assignments">
          {assetDetails[0]?.fa_distribution_history ? (
            <DataTable
              title="Assignments"
              data={{
                data: assetDetails[0]?.fa_distribution_history,
                pageCount:
                  assetDetails[0]?.fa_distribution_history?.length > 10
                    ? Math.ceil(
                        assetDetails[0]?.fa_distribution_history?.length / 10
                      )
                    : 1,
              }}
              columns={assignmentsColumns}
              initialVisibilityState={assignmentsInitialVisibilityState}
            />
          ) : (
            <Card className="container flex justify-center items-center min-h-[30vh]">
              No records found
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </SelectedLayout>
  );
}

export default AssetDetails;

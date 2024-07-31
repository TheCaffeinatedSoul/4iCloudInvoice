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

  const cardHeader = [
    { title: "Organization", value: lineData?.data[0]?.org_name },
    { title: "Supplier", value: lineData?.data[0]?.suggested_vendor_name },
    { title: "Item", value: lineData?.data[0]?.item_description },
    { title: "Type", value: lineData?.data[0]?.line_type },
    {
      title: "Amount",
      value:
        lineData?.data[0]?.currency_code + " " + lineData?.data[0]?.unit_price,
    },
    {
      title: "Preparer",
      value: lineData?.data[0]?.to_person_name,
    },
    {
      title: "Buyer",
      value: lineData?.data[0]?.suggested_buyer_name,
    },
    {
      title: "Buyer Location",
      value:
        lineData?.data[0]?.deliver_to_location_address1 +
        ", " +
        lineData?.data[0]?.deliver_to_location_code,
    },
  ];

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

import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getMtlTrxByID } from "@/service/inventory/material-transactions";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/inventory/material-transactions/distributions";
import { format } from "date-fns";

const Distributions = async ({
  params,
}: {
  params: { TRANSACTION_ID: string };
}) => {
  const mtlTrxDetails = await getMtlTrxByID(params.TRANSACTION_ID);
  const cardHeader = [
    { title: "Organization", value: mtlTrxDetails[0]?.organization_name },
    { title: "Description", value: mtlTrxDetails[0]?.item_description },
    {
      title: "Transaction Type",
      value: mtlTrxDetails[0]?.transaction_type_name,
    },
    {
      title: "Transaction Action",
      value: mtlTrxDetails[0]?.transaction_action_name,
    },
    {
      title: "Transaction Source",
      value: mtlTrxDetails[0]?.transaction_source_type_name,
    },
    {
      title: "Transaction Date",
      value: format(mtlTrxDetails[0]?.transaction_date, "dd-MMM-yyyy"),
    },
  ];

  return (
    <SelectedLayout
      title="Material Transaction"
      backLink="/inventory/material-transactions"
      cardDetails={cardHeader}
    >
      <div className="px-2">
        {mtlTrxDetails ? (
          <DataTable
            title="Distributions"
            data={{
              data: mtlTrxDetails[0]?.mtl_transaction_accounts,
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

export default Distributions;

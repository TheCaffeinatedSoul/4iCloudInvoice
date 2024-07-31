import SelectedLayout from "@/components/layouts/selected-layout";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getChecksDetailsByCheckNumber } from "@/service/payables/payments";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/payables/checks/payments";
import { format } from "date-fns";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

async function CheckDetails({ params }: { params: { CHECK_NUMBER: string } }) {
  const decodedCheckNumber = decodeURIComponent(params.CHECK_NUMBER);
  const checkData = await getChecksDetailsByCheckNumber(decodedCheckNumber);

  const headerCard = [
    { title: "Operating Unit", value: checkData[0]?.org_name },
    { title: "Check Number", value: checkData[0]?.check_number },
    { title: "Supplier Number", value: checkData[0]?.vendor_number },
    { title: "Supplier Name", value: checkData[0]?.vendor_name },
    {
      title: "Check Amount",
      value: checkData[0]?.currency_code + " " + checkData[0]?.amount,
    },
    {
      title: "Date",
      value: format(checkData[0]?.check_date.split(" ")[0], "dd-MMM-yyyy"),
    },
  ];

  return (
    <SelectedLayout
      title="Payment"
      backLink="/payables/payments"
      cardDetails={headerCard}
    >
      <div className="px-2">
        {checkData ? (
          <DataTable
            title="Check Details"
            data={{ data: checkData[0]?.ap_invoice_payments_all, pageCount: 1 }}
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

export default CheckDetails;

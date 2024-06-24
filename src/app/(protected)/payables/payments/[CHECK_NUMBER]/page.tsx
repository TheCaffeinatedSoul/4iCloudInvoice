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

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center p-4 gap-2 border-b-2">
        <Link href={"/payables/payments"}>
          <FaChevronLeft className="cursor-pointer" />
        </Link>
        <div className="font-bold">Checks</div>
      </div>
      <Card className="grid grid-cols-3 md:grid-cols-4 justify-evenly m-4 p-4 gap-4 text-sm bg-[#FFF6D7] border-none shadow-none">
        <div>
          <div className="font-bold">Operating Unit</div>
          <div>{checkData[0]?.org_name}</div>
        </div>
        <div>
          <div className="font-bold">Check Number</div>
          <div>{checkData[0]?.check_number}</div>
        </div>
        <div>
          <div className="font-bold">Supplier Number</div>
          <div>{checkData[0]?.vendor_number}</div>
        </div>
        <div>
          <div className="font-bold">Supplier Name</div>
          <div>{checkData[0]?.vendor_name}</div>
        </div>
        <div>
          <div className="font-bold">Date</div>
          <div>
            {format(checkData[0]?.check_date.split(" ")[0], "dd-MMM-yyyy")}
          </div>
        </div>
      </Card>
      <DataTable
        title="Payments"
        data={{
          data: checkData[0]?.ap_invoice_payments_all,
          pageCount:
            checkData[0]?.ap_invoice_payments_all?.length > 10
              ? Math.ceil(checkData[0]?.ap_invoice_payments_all?.length / 10)
              : 1,
        }}
        columns={columns}
        initialVisibilityState={initialVisibilityState}
      />
    </div>
  );
}

export default CheckDetails;

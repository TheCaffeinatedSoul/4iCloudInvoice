import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getLineDetails } from "@/service/applicationService";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/distributions-columns";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

const Line = async ({
  params,
}: {
  params: {
    INVOICE_NUMBER: string;
    LINE_NUMBER: number;
  };
}) => {
  const lineData = await getLineDetails(
    params.INVOICE_NUMBER,
    params.LINE_NUMBER
  );
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center p-4 gap-2 border-b-2">
        <Link href={`/invoice/${params.INVOICE_NUMBER}`}>
          <FaChevronLeft className="cursor-pointer" />
        </Link>
        <div className="font-bold">Lines</div>
      </div>
      <Card className="grid grid-cols-1 md:grid-cols-4 items-center justify-center m-4 p-4">
        Line information for invoice number {params.INVOICE_NUMBER} and line{" "}
        {params.LINE_NUMBER}
      </Card>
      <Card className="grid m-4 mt-0 p-4">
        {lineData ? (
          <DataTable
            title="Distributions"
            data={{
              data: lineData.data[0].invoice_distributions,
              pageCount: 1,
            }}
            columns={columns}
            initialVisibilityState={initialVisibilityState}
          />
        ) : (
          <div>No records found</div>
        )}
      </Card>
    </div>
  );
};

export default Line;

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

const Line = ({
  params,
}: {
  params: {
    INVOICE_NUMBER: string;
    LINE_NUMBER: number;
  };
}) => {
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
        Here the distributions shall be displayed
      </Card>
    </div>
  );
};

export default Line;

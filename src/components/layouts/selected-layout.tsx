import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

const SelectedLayout = ({
  children,
  title,
  backLink,
  cardDetails,
}: {
  children: React.ReactNode;
  title: string;
  backLink: string;
  cardDetails: any;
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center p-4 gap-2 border-b-2">
        <Link href={backLink}>
          <FaChevronLeft className="cursor-pointer" />
        </Link>
        <div className="font-bold">{title}</div>
      </div>
      <Card className="grid grid-cols-3 md:grid-cols-4 justify-evenly m-4 p-4 gap-4 text-sm bg-[#FFF6D7] border-none shadow-none">
        {cardDetails.map((details: any, index: any) => (
          <div key={index}>
            <div className="font-bold">{details.title}</div>
            <div>{details.value}</div>
          </div>
        ))}
      </Card>
      {children}
    </div>
  );
};

export default SelectedLayout;

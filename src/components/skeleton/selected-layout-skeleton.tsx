import { FaChevronLeft } from "react-icons/fa6";
import { Skeleton } from "../ui/skeleton";
import { Card } from "../ui/card";

const SelectedSkeleton = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center p-4 gap-2 border-b-2">
        <FaChevronLeft />
        <Skeleton className="w-[150px] h-[24px]" />
      </div>
      <Card className="grid grid-cols-3 md:grid-cols-4 justify-evenly m-4 p-4 gap-4 text-sm bg-[#FFF6D7] border-none shadow-none">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <Skeleton className="w-[15vw] md:w-[100px] h-[24px]" />
            <Skeleton className="w-[23vw] md:w-[150px] h-[24px]" />
          </div>
        ))}
      </Card>
      <div className="mx-4">
        <Skeleton className="h-[50vh]" />
      </div>
    </div>
  );
};

export default SelectedSkeleton;

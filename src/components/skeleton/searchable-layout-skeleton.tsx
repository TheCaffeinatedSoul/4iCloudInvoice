import { MdRefresh, MdSearch } from "react-icons/md";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SearchableSkeleton = () => {
  return (
    <div className="container flex flex-col p-2 gap-2">
      <Skeleton className="w-[30vw] h-[24px]" />
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <Skeleton className="w-[23vw] md:w-[150px] h-[24px]" />
              <Skeleton className="w-[45vw] md:w-full h-[24px]" />
            </div>
          ))}
          <div className="flex justify-end items-end pb-4 gap-4">
            <Skeleton className="h-[24px] w-[20vw]" />
            <Skeleton className="h-[24px] w-[20vw]" />
          </div>
        </div>
      </Card>
      <Skeleton className="h-[50vw]" />
    </div>
  );
};

export default SearchableSkeleton;

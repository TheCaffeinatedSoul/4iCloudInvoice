"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { useDebounceCallback } from "usehooks-ts";
import { IoSearchOutline } from "react-icons/io5";

function Searchbar({ placeholder }: { placeholder: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const setSearchParams = (value: string) => {
    const query = value.trim();
    if (query.length > 0) {
      params.set("query", query);
      const page = params.get("page");
      if (page) {
        params.set("page", "1");
      }
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params}`, {
      scroll: false,
    });
  };

  const debounced = useDebounceCallback(setSearchParams, 300);

  return (
    <div className="grid gap-1">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearchOutline className="text-gray-400" />
        </span>
        <Input
          placeholder={placeholder}
          className="pl-10"
          defaultValue={params.get("query") || ""}
          onChange={({ target: { value } }) => {
            debounced(value);
          }}
        />
      </div>
    </div>
  );
}

export default Searchbar;

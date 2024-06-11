"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { useDebounceCallback } from "usehooks-ts";

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
      {/* <Icon
        name="Search"
        className="h-9 w-9 rounded-md bg-primary p-2 text-white dark:text-black"
      /> */}
      <Input
        placeholder={placeholder}
        className="w-80"
        defaultValue={params.get("query") || ""}
        onChange={({ target: { value } }) => {
          debounced(value);
        }}
      />
    </div>
  );
}

export default Searchbar;

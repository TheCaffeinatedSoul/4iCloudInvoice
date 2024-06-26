"use client";
import { Card } from "@/components/ui/card";
import SearchForm from "@/components/search-form";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataTable } from "@/components/ui/data-table";
import { z } from "zod";
import { searchPayload } from "@/types/types";
import { serverSideSearchParams } from "@/schema/serverside-pagination";

type SearchableLayoutProps = {
  title: string;
  defaultValues: searchPayload;
  schema: z.ZodType<any>;
  columns: any;
  initialVisibilityState: any;
  searchFunction: (
    data: searchPayload,
    limit: number,
    page: number
  ) => Promise<any>;
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const SearchableLayout = ({
  title,
  defaultValues,
  schema,
  columns,
  initialVisibilityState,
  searchFunction,
  searchParams,
}: SearchableLayoutProps) => {
  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState<searchPayload>(defaultValues);
  const [data, setData] = useState({
    data: [],
    pageCount: 0,
  });

  const handleRefresh = (resetForm: () => void) => {
    setSearch(false);
    setData({
      data: [],
      pageCount: 0,
    });
    resetForm();
  };

  const handleSearch = async (data: searchPayload) => {
    setSearchData(data);
    try {
      setSearch(true);
      await performSearch(data, searchParams.limit, searchParams.page);
    } catch (error) {
      console.error("Error fetching search results: ", error);
    }
  };

  const performSearch = async (
    data: searchPayload,
    limit: number,
    page: number
  ) => {
    const response = await searchFunction(data, limit, page);
    if (response) {
      setData(response.data.data);
    }
  };

  useEffect(() => {
    performSearch(searchData, searchParams.limit, searchParams.page);
  }, [searchParams]);

  return (
    <div className="container flex flex-col p-2">
      <Accordion
        type="single"
        collapsible
        className="m-2 mt-0"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-2 font-bold hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            <Card className="p-4">
              <SearchForm
                search={handleSearch}
                reset={handleRefresh}
                defaultValues={defaultValues}
                schema={schema}
              />
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {search && (
        <div>
          <DataTable
            title="Search Results"
            columns={columns}
            data={data}
            initialVisibilityState={initialVisibilityState}
          />
        </div>
      )}
    </div>
  );
};

export default SearchableLayout;

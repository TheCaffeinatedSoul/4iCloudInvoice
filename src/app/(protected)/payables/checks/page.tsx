"use client";
import { Card } from "@/components/ui/card";
import SearchForm from "@/components/search-form";
import { useEffect, useState } from "react";
import { searchPayload } from "@/types/types";
import { getInvoiceBySearch } from "@/service/invoiceServices";
import { DataTable } from "@/components/ui/data-table";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/invoice-columns";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { invoiceSchema } from "@/schema/searchformschema";

type ChecksProps = {
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const defaultValues = {
  ORGANIZATION: "",
  INVOICE_NUMBER: "",
  SUPPLIER_NUMBER: "",
  SUPPLIER_NAME: "",
  FROM_DATE: "",
  TO_DATE: "",
};

const Checks = ({ searchParams }: ChecksProps) => {
  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState<searchPayload>(defaultValues);
  const [invoices, setInvoices] = useState({
    data: [],
    pageCount: 0,
  });

  const handleRefresh = (resetForm: () => void) => {
    setSearch(false);
    setInvoices({
      data: [],
      pageCount: 0,
    });
    resetForm();
  };

  const handleSearch = async (data: searchPayload) => {
    setSearchData(data);
    try {
      setSearch(true);
      await searchFunction(data, searchParams.limit, searchParams.page);
    } catch (error) {
      console.log("Error fetching search results: ", error);
    }
  };

  const searchFunction = async (
    data: searchPayload,
    limit: number,
    page: number
  ) => {
    const response = await getInvoiceBySearch(data, limit, page);
    setInvoices(response.data.data);
  };

  useEffect(() => {
    searchFunction(searchData, searchParams.limit, searchParams.page);
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
          <AccordionTrigger className="p-2 font-bold">Checks</AccordionTrigger>
          <AccordionContent>
            <Card className="p-4">
              <SearchForm
                search={handleSearch}
                reset={handleRefresh}
                defaultValues={defaultValues}
                schema={invoiceSchema}
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
            data={invoices}
            initialVisibilityState={initialVisibilityState}
          />
        </div>
      )}
    </div>
  );
};

export default Checks;

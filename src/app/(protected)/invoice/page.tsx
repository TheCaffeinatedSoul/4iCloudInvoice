"use client";
import { Card } from "@/components/ui/card";
import SearchForm from "./search-form";
import { useEffect, useState } from "react";
import { searchPayload } from "@/types/types";
import { getInvoiceBySearch } from "@/service/applicationService";
import { DataTable } from "@/components/ui/data-table";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/invoice_columns";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { z } from "zod";

type InvoiceProps = {
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const Invoice = ({ searchParams }: InvoiceProps) => {
  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState<searchPayload>({
    ORGANIZATION: "",
    INVOICE_NUMBER: "",
    SUPPLIER_NUMBER: "",
    SUPPLIER_NAME: "",
    FROM_DATE: "",
    TO_DATE: "",
  });
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
      <div className="p-2 font-bold">Search</div>
      <Card className="p-4 m-2">
        <SearchForm search={handleSearch} reset={handleRefresh} />
      </Card>
      {search && (
        <div>
          <DataTable
            title="Invoices"
            columns={columns}
            data={invoices}
            initialVisibilityState={initialVisibilityState}
          />
        </div>
      )}
    </div>
  );
};

export default Invoice;

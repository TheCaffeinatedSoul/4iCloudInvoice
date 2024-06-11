"use client";
import { Card } from "@/components/ui/card";
import SearchForm from "./search-form";
import { Button } from "@/components/ui/button";
import { MdRefresh, MdSearch } from "react-icons/md";
import { useState } from "react";
import InvoiceTable from "@/components/invoice-table";

const Home = () => {
  const [search, setSearch] = useState(false);

  const handleRefresh = () => {
    setSearch(false);
  };

  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <div className="container flex flex-col p-2">
      <div className="p-2 font-bold">Search</div>
      <Card className="p-4 m-2">
        <SearchForm onSubmit={handleSearch} />
        <div className="flex justify-end py-4 gap-4">
          <Button
            variant={"outline"}
            className="flex justify-evenly items-center gap-2"
            onClick={handleRefresh}
          >
            <MdRefresh />
            Refresh
          </Button>
          <Button
            className="flex justify-evenly items-center gap-2"
            onClick={handleSearch}
          >
            Search
            <MdSearch />
          </Button>
        </div>
      </Card>
      {search && (
        <div>
          <div className="p-2 font-bold">Invoices</div>
          <InvoiceTable />
        </div>
      )}
    </div>
  );
};

export default Home;

import InvoiceTable from "@/components/invoice-table";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./invoice_columns";
import { getAllInvoice } from "@/service/applicationService";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { z } from "zod";

type InvoiceProps = {
  searchParams: z.infer<typeof serverSideSearchParams>;
};

const InvoicePage = async ({ searchParams }: InvoiceProps) => {
  const invoices = await getAllInvoice(searchParams);
  return (
    <div className="container flex flex-col p-2">
      <div className="p-2 font-semibold">All Invoices</div>
      {/* <InvoiceTable /> */}
      <DataTable columns={columns} data={invoices.data} />
    </div>
  );
};

export default InvoicePage;

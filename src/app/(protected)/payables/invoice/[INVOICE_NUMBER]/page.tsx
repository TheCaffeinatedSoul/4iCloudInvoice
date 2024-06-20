import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { RiXrpLine } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { getDetailsByInvoiceNumber } from "@/service/invoiceServices";
import { DataTable } from "@/components/ui/data-table";
import {
  columns as holdsColumns,
  initialVisibilityState as holdsInitialVisibilityState,
} from "@/types/columndefs/holds-columns";
import {
  columns as linesColumns,
  initialVisibilityState as linesInitialVisibilityState,
} from "@/types/columndefs/line-columns";
import {
  columns as paymentsColumns,
  initialVisibilityState as paymentsInitialVisibilityState,
} from "@/types/columndefs/payment-columns";
import { format } from "date-fns";

async function InvoiceDetails({
  params,
}: {
  params: { INVOICE_NUMBER: string };
}) {
  const decodedInvoiceNumber = decodeURIComponent(params.INVOICE_NUMBER);
  const invoiceData = await getDetailsByInvoiceNumber(decodedInvoiceNumber);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center p-4 gap-2 border-b-2">
        <Link href={"/payables/invoice"}>
          <FaChevronLeft className="cursor-pointer" />
        </Link>
        <div className="font-bold">Invoice</div>
      </div>
      <Card className="grid grid-cols-3 md:grid-cols-4 justify-evenly m-4 p-4 gap-4 text-sm bg-[#FFF6D7] border-none shadow-none">
        <div>
          <div className="font-bold">Operating Unit</div>
          <div>{invoiceData[0]?.org_name}</div>
        </div>
        <div>
          <div className="font-bold">Invoice Number</div>
          <div>{invoiceData[0]?.invoice_num}</div>
        </div>
        <div>
          <div className="font-bold">Supplier Number</div>
          <div>{invoiceData[0]?.vendor_num}</div>
        </div>
        <div>
          <div className="font-bold">Supplier Name</div>
          <div>{invoiceData[0]?.vendor_name}</div>
        </div>
        <div>
          <div className="font-bold">Invoice Type</div>
          <div>{invoiceData[0]?.invoice_type_lookup_code_meaning}</div>
        </div>
        <div>
          <div className="font-bold">Invoice Amount</div>
          <div>
            {invoiceData[0]?.invoice_currency_code}{" "}
            {invoiceData[0]?.invoice_amount}
          </div>
        </div>
        <div>
          <div className="font-bold">Term</div>
          <div>{invoiceData[0]?.terms_name}</div>
        </div>
        <div>
          <div className="font-bold">Date</div>
          <div>
            {format(invoiceData[0]?.invoice_date.split(" ")[0], "dd-MMM-yyyy")}
          </div>
        </div>
        <div>
          <div className="font-bold">Due Date</div>
          <div>
            {format(invoiceData[0]?.terms_date.split(" ")[0], "dd-MMM-yyyy")}
          </div>
        </div>
      </Card>
      <Tabs defaultValue="lines" className="px-4 mb-4">
        <TabsList className="flex justify-evenly w-full">
          <TabsTrigger value="lines" className="flex gap-2 w-full">
            <RiXrpLine />
            Lines
          </TabsTrigger>
          <TabsTrigger value="holds" className="flex gap-2 w-full">
            <FaHandHoldingUsd /> Holds
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex gap-2 w-full">
            <BsCreditCard /> Payment
          </TabsTrigger>
        </TabsList>
        <TabsContent value="lines">
          {invoiceData[0].ap_invoice_lines_all ? (
            <DataTable
              title="Lines"
              data={{
                data: invoiceData[0]?.ap_invoice_lines_all.sort(
                  (a: any, b: any) => a.line_number - b.line_number
                ),
                pageCount:
                  invoiceData[0]?.ap_invoice_lines_all?.length > 10
                    ? invoiceData[0]?.ap_invoice_lines_all?.length / 10
                    : 1,
              }}
              columns={linesColumns}
              initialVisibilityState={linesInitialVisibilityState}
            />
          ) : (
            <Card className="container flex justify-center items-center min-h-[30vh]">
              No records found
            </Card>
          )}
        </TabsContent>
        <TabsContent value="holds">
          {invoiceData[0].ap_holds_all ? (
            <DataTable
              title="Holds"
              data={{
                data: invoiceData[0]?.ap_holds_all,
                pageCount:
                  invoiceData[0]?.ap_holds_all?.length > 10
                    ? invoiceData[0]?.ap_holds_all?.length / 10
                    : 1,
              }}
              columns={holdsColumns}
              initialVisibilityState={holdsInitialVisibilityState}
            />
          ) : (
            <Card className="container flex justify-center items-center min-h-[30vh]">
              No records found
            </Card>
          )}
        </TabsContent>
        <TabsContent value="payment">
          {invoiceData[0].ap_invoice_payments_all ? (
            <DataTable
              title="Payments"
              data={{
                data: invoiceData[0]?.ap_invoice_payments_all,
                pageCount:
                  invoiceData[0]?.ap_invoice_payments_all?.length > 10
                    ? invoiceData[0]?.ap_invoice_payments_all?.length / 10
                    : 1,
              }}
              columns={paymentsColumns}
              initialVisibilityState={paymentsInitialVisibilityState}
            />
          ) : (
            <Card className="container flex justify-center items-center min-h-[30vh]">
              No records found
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default InvoiceDetails;

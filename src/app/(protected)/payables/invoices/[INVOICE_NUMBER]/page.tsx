import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { RiXrpLine } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { getDetailsByInvoiceNumber } from "@/service/payables/invoice";
import { DataTable } from "@/components/ui/data-table";
import {
  columns as holdsColumns,
  initialVisibilityState as holdsInitialVisibilityState,
} from "@/types/columndefs/payables/invoices/holds";
import {
  columns as linesColumns,
  initialVisibilityState as linesInitialVisibilityState,
} from "@/types/columndefs/payables/invoices/lines";
import {
  columns as paymentsColumns,
  initialVisibilityState as paymentsInitialVisibilityState,
} from "@/types/columndefs/payables/invoices/payments";
import { format } from "date-fns";
import SelectedLayout from "@/components/layouts/selected-layout";

async function InvoiceDetails({
  params,
}: {
  params: { INVOICE_NUMBER: string };
}) {
  const decodedInvoiceNumber = decodeURIComponent(params.INVOICE_NUMBER);
  const invoiceData = await getDetailsByInvoiceNumber(decodedInvoiceNumber);

  const headerCard = [
    { title: "Operating Unit", value: invoiceData[0]?.org_name },
    { title: "Invoice Number", value: invoiceData[0]?.invoice_num },
    { title: "Supplier Number", value: invoiceData[0]?.vendor_num },
    { title: "Supplier Name", value: invoiceData[0]?.vendor_name },
    {
      title: "Invoice Type",
      value: invoiceData[0]?.invoice_type_lookup_code_meaning,
    },
    {
      title: "Invoice Amount",
      value:
        invoiceData[0].invoice_currency_code +
        " " +
        invoiceData[0].invoice_amount,
    },
    { title: "Term", value: invoiceData[0]?.terms_name },
    {
      title: "Date",
      value: format(invoiceData[0]?.invoice_date.split(" ")[0], "dd-MMM-yyyy"),
    },
    {
      title: "Due Date",
      value: format(invoiceData[0]?.terms_date.split(" ")[0], "dd-MMM-yyyy"),
    },
  ];

  return (
    <SelectedLayout
      title="Invoices"
      backLink="/payables/invoices"
      cardDetails={headerCard}
    >
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
                    ? Math.ceil(
                        invoiceData[0]?.ap_invoice_lines_all?.length / 10
                      )
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
                    ? Math.ceil(
                        invoiceData[0]?.ap_invoice_payments_all?.length / 10
                      )
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
      {/* </div> */}
    </SelectedLayout>
  );
}

export default InvoiceDetails;

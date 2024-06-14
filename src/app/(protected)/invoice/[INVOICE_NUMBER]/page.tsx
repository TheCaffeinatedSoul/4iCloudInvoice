import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { RiXrpLine } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDetailsByInvoiceNumber } from "@/service/applicationService";
import { DataTable } from "@/components/ui/data-table";
import {
  columns,
  initialVisibilityState,
} from "@/types/columndefs/holds-columns";

async function InvoiceDetails({
  params,
}: {
  params: { INVOICE_NUMBER: string };
}) {
  const invoiceData = await getDetailsByInvoiceNumber(params.INVOICE_NUMBER);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center p-4 gap-2 border-b-2">
        <Link href={"/invoice"}>
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
          <div>{invoiceData[0]?.invoice_type_lookup_code}</div>
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
          <div>{invoiceData[0]?.invoice_date.split(" ")[0]}</div>
        </div>
        <div>
          <div className="font-bold">Due Date</div>
          <div>{invoiceData[0]?.terms_date.split(" ")[0]}</div>
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
          <Card className="grid">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Line Number</TableHead>
                  <TableHead>Line Type</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>UOM</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Tax %</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData[0]?.invoice_lines?.map((line: any) => (
                  <TableRow key={line.line_number}>
                    <TableCell className="underline text-blue-500">
                      <Link
                        href={`/invoice/${params.INVOICE_NUMBER}/${line.line_number}`}
                      >
                        {line.line_number}
                      </Link>
                    </TableCell>
                    <TableCell>{line.line_type_lookup_code}</TableCell>
                    <TableCell>{line.item_code}</TableCell>
                    <TableCell>{line.description}</TableCell>
                    <TableCell>{line.unit_meas_lookup_code}</TableCell>
                    <TableCell>{line.quantity_invoiced}</TableCell>
                    <TableCell>{line.unit_price}</TableCell>
                    <TableCell>{line.tax_rate}</TableCell>
                    <TableCell>{line.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
        <TabsContent value="holds">
          {invoiceData[0].invoice_holds ? (
            <DataTable
              title="Holds"
              data={{
                data: invoiceData[0]?.invoice_holds,
                pageCount:
                  invoiceData[0]?.invoice_holds?.length > 10
                    ? invoiceData[0]?.invoice_holds?.length / 10
                    : 1,
              }}
              columns={columns}
              initialVisibilityState={initialVisibilityState}
            />
          ) : (
            <div className="container flex justify-center">
              No records found
            </div>
          )}
        </TabsContent>
        <TabsContent value="payment">
          {invoiceData[0]?.invoice_payments?.map((payment: any) => (
            <Card
              className="grid grid-cols-3 md:grid-cols-4 justify-evenly p-4 gap-6 text-sm border-none shadow-none"
              key={payment.invoice_num}
            >
              <div>
                <div className="font-bold">Payment Amount</div>
                <div>{payment.amount}</div>
              </div>
              <div>
                <div className="font-bold">Ledger Name</div>
                <div>{payment.ledger_name}</div>
              </div>
              <div>
                <div className="font-bold">Asset Code</div>
                <div>{payment.asset_code_combination}</div>
              </div>
              <div>
                <div className="font-bold">Description</div>
                <div>{payment.asset_code_desc}</div>
              </div>
              <div>
                <div className="font-bold">Bank A/C Number</div>
                <div>{payment.bank_account_num}</div>
              </div>
              <div>
                <div className="font-bold">Bank A/C Type</div>
                <div>{payment.bank_account_type}</div>
              </div>
              <div>
                <div className="font-bold">Payment Date</div>
                <div>{payment.exchange_date}</div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default InvoiceDetails;

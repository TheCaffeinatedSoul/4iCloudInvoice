import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Link from "next/link";
import { Toggle } from "./ui/toggle";
import { getAllInvoice } from "@/service/applicationService";

const InvoiceTable = async () => {
  const invoices = await getAllInvoice();
  return (
    <Card className="grid p-4 m-2">
      <Input type="search" placeholder="Search ..." />
      <div className="flex items-center py-2 gap-2">
        <div className="text-sm">Sort by :</div>
        <Toggle className="p-2" variant={"outline"}>
          Invoice Date
        </Toggle>
        <Toggle className="p-2" variant={"outline"}>
          Supplier Name
        </Toggle>
        <Toggle className="p-2" variant={"outline"}>
          Supplier Number
        </Toggle>
      </div>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Invoice Date</TableHead>
            <TableHead>Operating Unit</TableHead>
            <TableHead>Customer Taxpayer ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>PO Number</TableHead>
            <TableHead>Trading Partner</TableHead>
            <TableHead>Supplier Number</TableHead>
            <TableHead>Supplier Site Code</TableHead>
            <TableHead>Invoice Currency</TableHead>
            <TableHead>Invoice Amount</TableHead>
            <TableHead>Tax Amount</TableHead>
            <TableHead>Tax Control Amount</TableHead>
            <TableHead>Withheld Amount</TableHead>
            <TableHead>Prepaid Amount</TableHead>
            <TableHead>GL Date</TableHead>
            <TableHead>Payment Currency</TableHead>
            <TableHead>Payment Rate Date</TableHead>
            <TableHead>Payment Rate Type</TableHead>
            <TableHead>Payment Rate</TableHead>
            <TableHead>Distribution Set</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Credited Invoice</TableHead>
            <TableHead>Match Action</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Expenditure Item Date</TableHead>
            <TableHead>Expenditure Type</TableHead>
            <TableHead>Expenditure Organization</TableHead>
            <TableHead>Rate Type</TableHead>
            <TableHead>Exchange Date</TableHead>
            <TableHead>Exchange Rate</TableHead>
            <TableHead>Terms Date</TableHead>
            <TableHead>Terms</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Pay Group</TableHead>
            <TableHead>Prepayment Type</TableHead>
            <TableHead>Settlement Date</TableHead>
            <TableHead>Taxation Country</TableHead>
            <TableHead>Business Category</TableHead>
            <TableHead>Fiscal Calculation</TableHead>
            <TableHead>Related Invoice</TableHead>
            <TableHead>Invoice Sub-Type</TableHead>
            <TableHead>Self-Assessed Tax Amount</TableHead>
            <TableHead>Internal Sequence Number</TableHead>
            <TableHead>Supplier Tax Invoice Number</TableHead>
            <TableHead>Internal Recording Date</TableHead>
            <TableHead>Supplier Tax Invoice Date</TableHead>
            <TableHead>Supplier Tax Invoice Exchange Rate</TableHead>
            <TableHead>Customs Location Code</TableHead>
            <TableHead>Remit-To Supplier Name</TableHead>
            <TableHead>Remit-To Supplier Site</TableHead>
            <TableHead>Remit-To Bank Account Name</TableHead>
            <TableHead>Remit-To Bank Account Number</TableHead>
            <TableHead>Release Amount Net of Tax</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.data.map((item: any) => (
            <TableRow key={item.invoice_id}>
              <TableCell className="underline text-blue-600">
                <Link href={`/invoice/${item.invoice_num}`}>
                  {item.invoice_num}
                </Link>
              </TableCell>
              <TableCell>{item.invoice_date}</TableCell>
              <TableCell>{item.operating_unit}</TableCell>
              <TableCell>{item.cust_registration_number}</TableCell>
              <TableCell>{item.invoice_type_lookup_code_meaning}</TableCell>
              <TableCell>{item.quick_po_number}</TableCell>
              <TableCell>{item.vendor_name}</TableCell>
              <TableCell>{item.vendor_num}</TableCell>
              <TableCell>{item.vendor_site_code}</TableCell>
              <TableCell>{item.invoice_currency_code}</TableCell>
              <TableCell>{item.invoice_amount}</TableCell>
              <TableCell>{item.total_tax_amount}</TableCell>
              <TableCell>{item.control_amount}</TableCell>
              <TableCell>{item.withheld_amount}</TableCell>
              <TableCell>{item.prepaid_amount}</TableCell>
              <TableCell>{item.gl_date}</TableCell>
              <TableCell>{item.payment_currency_code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default InvoiceTable;

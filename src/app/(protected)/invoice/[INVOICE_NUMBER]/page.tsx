"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { data } from "@/data/data";
import { invoiceData } from "@/types/types";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { RiXrpLine } from "react-icons/ri";
import { LuAlignHorizontalDistributeStart } from "react-icons/lu";
import { TiLocationArrowOutline } from "react-icons/ti";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function InvoiceDetails({ params }: { params: { INVOICE_NUMBER: string } }) {
  const invoiceData: invoiceData = data.find(
    (d) => d?.invoice_number === params.INVOICE_NUMBER
  )!;

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center p-4 gap-2 border-b-2">
        <Link href={"/home"}>
          <FaChevronLeft className="cursor-pointer" />
        </Link>
        <div className="font-bold">Invoice</div>
      </div>
      <Card className="flex justify-evenly m-4 p-4 gap-4 text-sm">
        <div>
          <div className="font-bold">Organization</div>
          <div>{invoiceData?.organization}</div>
        </div>
        <div>
          <div className="font-bold">Invoice Number</div>
          <div>{invoiceData?.invoice_number}</div>
        </div>
        <div>
          <div className="font-bold">Supplier Number</div>
          <div>{invoiceData?.supplier_number}</div>
        </div>
        <div>
          <div className="font-bold">Supplier Name</div>
          <div>{invoiceData?.supplier_name}</div>
        </div>
        <div>
          <div className="font-bold">Invoice Type</div>
          <div>{invoiceData?.invoice_type}</div>
        </div>
        <div>
          <div className="font-bold">Currency</div>
          <div>
            {invoiceData?.currency_code} {invoiceData?.amount}
          </div>
        </div>
        <div>
          <div className="font-bold">Term</div>
          <div>{invoiceData?.term}</div>
        </div>
        <div>
          <div className="font-bold">Date</div>
          <div>{invoiceData?.invoice_date}</div>
        </div>
        <div>
          <div className="font-bold">Due Date</div>
          <div>{invoiceData?.due_date}</div>
        </div>
      </Card>
      <Tabs defaultValue="lines" className="px-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="lines" className="flex gap-2">
            <RiXrpLine />
            Lines
          </TabsTrigger>
          <TabsTrigger value="distribution" className="flex gap-2">
            <LuAlignHorizontalDistributeStart /> Distribution
          </TabsTrigger>
          <TabsTrigger value="location" className="flex gap-2">
            <TiLocationArrowOutline /> Location
          </TabsTrigger>
        </TabsList>
        <TabsContent value="lines">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Line Number</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>UOM</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Tax %</TableHead>
                  <TableHead>Tax Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData?.lines?.map((line) => (
                  <TableRow key={line.line_number}>
                    <TableCell>{line.line_number}</TableCell>
                    <TableCell>{line.item}</TableCell>
                    <TableCell>{line.item_name}</TableCell>
                    <TableCell>{line.line_desc}</TableCell>
                    <TableCell>{line.uom}</TableCell>
                    <TableCell>{line.qty}</TableCell>
                    <TableCell>{line.unit_price}</TableCell>
                    <TableCell>
                      {invoiceData?.currency_code} {line.unit_price * line.qty}
                    </TableCell>
                    <TableCell>{line.tax_perc}</TableCell>
                    <TableCell>
                      {(line.tax_perc * line.unit_price * line.qty) / 100}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
        <TabsContent value="distribution">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Serial Number</TableHead>
                  <TableHead>Chart of Account</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>GL Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData?.distribution?.map((dist) => (
                  <TableRow key={dist.serial_number}>
                    <TableCell>{dist.serial_number}</TableCell>
                    <TableCell>{dist.chart_of_account}</TableCell>
                    <TableCell>{dist.distribution_amount}</TableCell>
                    <TableCell>{dist.gl_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
        <TabsContent value="location">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Serial Number</TableHead>
                  <TableHead>Location Code</TableHead>
                  <TableHead>Location Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData?.location?.map((loc) => (
                  <TableRow key={loc.serial_number}>
                    <TableCell>{loc.serial_number}</TableCell>
                    <TableCell>{loc.location_code}</TableCell>
                    <TableCell>{loc.location_name}</TableCell>
                    <TableCell>{loc.qty}</TableCell>
                    <TableCell>{loc.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default InvoiceDetails;

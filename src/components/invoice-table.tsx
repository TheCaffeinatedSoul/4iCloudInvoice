"use client";
import { data } from "@/data/data";
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

const InvoiceTable = () => {
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
            <TableHead>Supplier Number</TableHead>
            <TableHead>Supplier Name</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Organization</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.invoice_number}>
              <TableCell className="underline text-blue-600">
                <Link href={`/invoice/${item.invoice_number}`}>
                  {item.invoice_number}
                </Link>
              </TableCell>
              <TableCell>{item.invoice_date}</TableCell>
              <TableCell>{item.supplier_number}</TableCell>
              <TableCell>{item.supplier_name}</TableCell>
              <TableCell>{item.currency}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.due_date}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.organization}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default InvoiceTable;

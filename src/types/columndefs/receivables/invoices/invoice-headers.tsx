"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "transaction number": true,
  type: true,
  date: true,
  "GL date": true,
  "due date": true,
  "document number": true,
  "legal entity": true,
  "bill to contact": true,
  source: true,
  "sold to name": true,
  "sold to number": true,
  "bill to name": true,
  "bill to number": true,
  "bill to location": false,
  "bill to address": false,
  "ship to name": false,
  "ship to number": false,
  "ship to contact": false,
  "ship to location": false,
  "ship to address": false,
  "payment term": false,
  currency: false,
  "paying customer number": false,
  "paying customer name": false,
  "paying location": false,
  reference: false,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "S.No",
    header: "S.No",
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>;
    },
  },
  {
    id: "view",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="View" />
    ),
    cell: ({
      row: {
        original: { customer_trx_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/receivables/invoices/${customer_trx_id}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "transaction number",
    accessorKey: "trx_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Number" />
    ),
  },
  {
    id: "type",
    accessorKey: "cust_trx_type_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "date",
    accessorKey: "trx_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({
      row: {
        original: { trx_date },
      },
    }) => {
      if (!trx_date) return "";
      const date = trx_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "GL date",
    accessorKey: "gl_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Date" />
    ),
    cell: ({
      row: {
        original: { gl_date },
      },
    }) => {
      if (!gl_date) return "";
      const date = gl_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "due date",
    accessorKey: "due_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Due Date" />
    ),
    cell: ({
      row: {
        original: { due_date },
      },
    }) => {
      if (!due_date) return "";
      const date = due_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "document number",
    accessorKey: "document_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Number" />
    ),
  },
  {
    id: "legal entity",
    accessorKey: "legal_entity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Legal Entity" />
    ),
  },
  {
    id: "bill to contact",
    accessorKey: "bill_to_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Contact" />
    ),
  },
  {
    id: "source",
    accessorKey: "batch_source_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),
  },
  {
    id: "sold to name",
    accessorKey: "sold_to_customer_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sold To Name" />
    ),
  },
  {
    id: "sold to number",
    accessorKey: "sold_to_customer_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sold To Number" />
    ),
  },
  {
    id: "bill to name",
    accessorKey: "bill_to_customer_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Name" />
    ),
  },
  {
    id: "bil to number",
    accessorKey: "bill_to_customer_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Number" />
    ),
  },
  {
    id: "bill to location",
    accessorKey: "bill_to_location_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Location" />
    ),
  },
  {
    id: "bill to address",
    accessorKey: "bill_to_location_addr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address" />
    ),
  },
  {
    id: "ship to name",
    accessorKey: "ship_to_customer_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Name" />
    ),
  },
  {
    id: "ship to number",
    accessorKey: "ship_to_customer_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Number" />
    ),
  },
  {
    id: "ship to contact",
    accessorKey: "ship_to_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Contact" />
    ),
  },
  {
    id: "ship to location",
    accessorKey: "ship_to_location_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Location" />
    ),
  },
  {
    id: "ship to contact",
    accessorKey: "ship_to_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Contact" />
    ),
  },
  {
    id: "ship to location",
    accessorKey: "ship_to_location_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Location" />
    ),
  },
  {
    id: "ship to address",
    accessorKey: "ship_to_location_addr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address" />
    ),
  },
  {
    id: "payment term",
    accessorKey: "term_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Term" />
    ),
  },
  {
    id: "currency",
    accessorKey: "invoice_currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Currency" />
    ),
  },
  {
    id: "paying customer number",
    accessorKey: "paying_customer_no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Paying Customer Number" />
    ),
  },
  {
    id: "paying customer name",
    accessorKey: "paying_customer_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Paying Customer Name" />
    ),
  },
  {
    id: "paying location",
    accessorKey: "paying_location_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Paying Location" />
    ),
  },
  {
    id: "reference",
    accessorKey: "interface_header_attribute1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference" />
    ),
  },
];

export { columns };

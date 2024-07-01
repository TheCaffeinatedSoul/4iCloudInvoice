"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "line number": true,
  item: true,
  description: true,
  UOM: true,
  quantity: true,
  "unit price": true,
  amount: true,
  revision: false,
  date: true,
  "customer name": true,
  "customer number": true,
  contact: true,
  address: true,
  "tax classificiation": true,
  channel: false,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "Line Number",
    accessorKey: "line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Number" />
    ),
    cell: ({
      row: {
        original: { line_number, customer_trx_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/receivables/invoices/${customer_trx_id}/${line_number}`}
        >
          {line_number}
        </Link>
      );
    },
  },
  {
    id: "item",
    accessorKey: "inventory_item_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
  },
  {
    id: "description",
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "UOM",
    accessorKey: "uom_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "quantity",
    accessorKey: "quantity_ordered",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
  },
  {
    id: "unit price",
    accessorKey: "unit_standard_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit Price" />
    ),
  },
  {
    id: "amount",
    accessorKey: "extended_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    id: "revision",
    accessorKey: "sales_order_revision",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revision" />
    ),
  },
  {
    id: "date",
    accessorKey: "sales_order_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({
      row: {
        original: { sales_order_date },
      },
    }) => {
      if (!sales_order_date) return "";
      const date = sales_order_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "customer name",
    accessorKey: "ship_to_customer_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
  },
  {
    id: "customer number",
    accessorKey: "ship_to_customer_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Number" />
    ),
  },
  {
    id: "address",
    accessorKey: "ship_to_address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
  },
  {
    id: "Contact",
    accessorKey: "ship_to_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact" />
    ),
  },
  {
    id: "tax classification",
    accessorKey: "tax_classification_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Classification" />
    ),
  },
  {
    id: "channel",
    accessorKey: "interface_line_context",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Channel" />
    ),
  },
];

export { columns };

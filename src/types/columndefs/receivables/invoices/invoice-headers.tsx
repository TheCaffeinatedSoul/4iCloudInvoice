"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
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
    id: "number",
    accessorKey: "trx_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
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
  },
  {
    id: "GL date",
    accessorKey: "gl_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Date" />
    ),
  },
  {
    id: "due date",
    accessorKey: "due_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Due Date" />
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
    id: "customer name",
    accessorKey: "sold_to_customer_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
  },
  {
    id: "customer number",
    accessorKey: "sold_to_customer_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Number" />
    ),
  },
];

export { columns };

"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  status: true,
  "transaction date": true,
  "GL data": true,
  amount: true,
  rate: true,
  "exchange date": true,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "S.No",
    header: "S.No",
    accessorKey: "S.No",
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>;
    },
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "transaction date",
    accessorKey: "trx_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Date" />
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
    id: "amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    id: "rate",
    accessorKey: "exchange_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rate" />
    ),
  },
  {
    id: "exchange data",
    accessorKey: "exchange_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exchange Date" />
    ),
    cell: ({
      row: {
        original: { exchange_date },
      },
    }) => {
      if (!exchange_date) return "";
      const date = exchange_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
];

export { columns };

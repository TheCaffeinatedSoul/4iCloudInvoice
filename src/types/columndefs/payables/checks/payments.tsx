"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "GL date": true,
  "payment amount": true,
  number: true,
  date: true,
  amount: true,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "S.No",
    header: "S.No",
    cell: ({ row: { index }, table: { getState } }) => {
      const {
        pagination: { pageIndex, pageSize },
      } = getState();
      return pageIndex * pageSize + index + 1;
    },
  },
  {
    id: "GL date",
    accessorKey: "accounting_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Date" />
    ),
    cell: ({
      row: {
        original: { accounting_date },
      },
    }) => {
      if (!accounting_date) return "";
      const date = accounting_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "payment amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Amount" />
    ),
  },
  {
    id: "number",
    accessorKey: "invoice_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
  },
  {
    id: "date",
    accessorKey: "invoice_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({
      row: {
        original: { invoice_date },
      },
    }) => {
      if (!invoice_date) return "";
      const date = invoice_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "amount",
    accessorKey: "invoice_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
];

export { columns };

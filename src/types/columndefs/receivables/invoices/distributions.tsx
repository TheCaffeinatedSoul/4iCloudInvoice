"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "trans line": true,
  "detail line": true,
  class: true,
  "GL account": true,
  "GL date": true,
  "distribution amount": true,
  "transaction line amount": true,
  "GL posted date": true,
  "percentage (%)": true,
  "accounting rule": true,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "trans line",
    accessorKey: "line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trans Line" />
    ),
  },
  {
    id: "detail line",
    accessorKey: "detail_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Detail Line" />
    ),
  },
  {
    id: "class",
    accessorKey: "class",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Class" />
    ),
  },
  {
    id: "GL account",
    accessorKey: "concatenated_segments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Account" />
    ),
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
    id: "distribution amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Distribution Amount" />
    ),
  },
  {
    id: "transaction line amount",
    accessorKey: "extended_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Line Amount" />
    ),
  },
  {
    id: "GL posted date",
    accessorKey: "gl_posted_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Posted Date" />
    ),
    cell: ({
      row: {
        original: { gl_posted_date },
      },
    }) => {
      if (!gl_posted_date) return "";
      const date = gl_posted_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "percentage (%)",
    accessorKey: "percent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Percentage (%)" />
    ),
  },
  {
    id: "accounting rule",
    accessorKey: "accounting_rule",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Accounting Rule" />
    ),
  },
];

export { columns };

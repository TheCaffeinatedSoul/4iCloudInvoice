"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "line number": true,
  quantity: true,
  "charge amount": true,
  "recovery rate": true,
  "GL date": true,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "line number",
    accessorKey: "line_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Number" />
    ),
  },
  {
    id: "quantity",
    accessorKey: "req_line_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
  },
  {
    id: "charge account",
    accessorKey: "concatenated_segments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Charge Amount" />
    ),
  },
  {
    id: "recovery rate",
    accessorKey: "recovery_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recovery Rate" />
    ),
  },
  {
    id: "GL date",
    accessorKey: "gl_encumbered_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Date" />
    ),
    cell: ({
      row: {
        original: { gl_encumbered_date },
      },
    }) => {
      if (!gl_encumbered_date) return "";
      const date = gl_encumbered_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
];

export { columns };

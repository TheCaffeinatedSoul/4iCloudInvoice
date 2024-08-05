"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "PO charge account": true,
  quantity: true,
  "deliver to": true,
  "recovery rate": true,
  type: true,
  subinventory: true,
  "GL date": true,
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
    id: "PO charge account",
    accessorKey: "concatenated_segments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Charge Account" />
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
    id: "deliver to",
    accessorKey: "deliver_to_location_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deliver To" />
    ),
  },
  {
    id: "recovery rate",
    accessorKey: "rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recovery Rate" />
    ),
  },
  {
    id: "type",
    accessorKey: "destination_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "subinventory",
    accessorKey: "destination_subinventory",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subinventory" />
    ),
  },
  {
    id: "GL date",
    accessorKey: "gl_closed_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Date" />
    ),
  },
];

export { columns };

"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {};

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
    id: "book",
    accessorKey: "book_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Book" />
    ),
  },
  {
    id: "asset number",
    accessorKey: "asset_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Number" />
    ),
  },
  {
    id: "expense account",
    accessorKey: "concatenated_segments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expense Account" />
    ),
  },
  {
    id: "location",
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
  },
  {
    id: "comments",
    accessorKey: "transaction_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Comments" />
    ),
  },
  {
    id: "total units",
    accessorKey: "current_units",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Units" />
    ),
  },
  {
    id: "number",
    accessorKey: "assigned_to_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
  },
  {
    id: "employee name",
    accessorKey: "assigned_to_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Employee Name" />
    ),
  },
];

export { columns };

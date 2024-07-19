"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "line number",
    accessorKey: "line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Number" />
    ),
  },
  {
    id: "item",
    accessorKey: "item_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
  },
  {
    id: "revision",
    accessorKey: "revision",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revision" />
    ),
  },
  {
    id: "transaction type",
    accessorKey: "TRANSACTION_TYPE_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Type" />
    ),
  },
  {
    id: "date required",
    accessorKey: "date_required",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Required" />
    ),
    cell: ({
      row: {
        original: { date_required },
      },
    }) => {
      if (!date_required) return "";
      const date = date_required.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "UOM",
    accessorKey: "uom_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "primary quantity",
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primary Quantity" />
    ),
  },
  {
    id: "quantity delivered",
    accessorKey: "quantity_delivered",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity Delivered" />
    ),
  },
  {
    id: "secondary UOM",
    accessorKey: "secondary_uom_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary UOM" />
    ),
  },
  {
    id: "secondary quantity",
    accessorKey: "secondary_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary Quantity" />
    ),
  },
  {
    id: "secondary quantity delivered",
    accessorKey: "secondary_quantity_delivered",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Secondary Quantity Delivered"
      />
    ),
  },
  {
    id: "grade",
    accessorKey: "grade_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Grade" />
    ),
  },
  {
    id: "project",
    accessorKey: "PROJECT_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project" />
    ),
  },
  {
    id: "task",
    accessorKey: "TASK_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
  },
];

export { columns };

"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {};

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
    id: "detail",
    accessorKey: "delivery_detail_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Detail" />
    ),
  },
  {
    id: "Item",
    accessorKey: "item_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
  },
  {
    id: "delivery",
    accessorKey: "delivery_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Delivery" />
    ),
  },
  {
    id: "line status",
    accessorKey: "line_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Status" />
    ),
  },
  {
    id: "next step",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Next Step" />
    ),
  },
  {
    id: "order",
    accessorKey: "order_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order" />
    ),
  },
  {
    id: "requested qty",
    accessorKey: "requested_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requested Qty" />
    ),
  },
  {
    id: "serial number",
    accessorKey: "serial_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Serial Number" />
    ),
  },
  {
    id: "inventory controls",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inventory Controls" />
    ),
  },
  {
    id: "ship from",
    accessorKey: "ship_from",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship From" />
    ),
  },
  {
    id: "ship to",
    accessorKey: "ship_to",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To" />
    ),
  },
  {
    id: "deliver to",
    accessorKey: "deliver_to",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Delvier To" />
    ),
  },
  {
    id: "org code",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Org Code" />
    ),
  },
  {
    id: "subinventory",
    accessorKey: "subinventory",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subinventory" />
    ),
  },
  {
    id: "batch ID",
    accessorKey: "batch_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Batch ID" />
    ),
  },
  {
    id: "item description",
    accessorKey: "item_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item Description" />
    ),
  },
  {
    id: "lpn",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lpn" />
    ),
  },
  {
    id: "requested qty UOM",
    accessorKey: "requested_quantity_uom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requested Qty UOM" />
    ),
  },
  {
    id: "requested qty",
    accessorKey: "requested_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requested Qty" />
    ),
  },
  {
    id: "picked qty",
    accessorKey: "picked_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Picked Qty" />
    ),
  },
];

export { columns };

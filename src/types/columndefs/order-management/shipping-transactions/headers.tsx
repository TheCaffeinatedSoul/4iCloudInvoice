"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
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
    accessorKey: "DELIVERY_DETAIL_ID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Detail" />
    ),
  },
  {
    id: "Item",
    accessorKey: "ITEM_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
  },
  {
    id: "delivery",
    accessorKey: "DELIVERY_ID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Delivery" />
    ),
  },
  {
    id: "line status",
    accessorKey: "LINE_STATUS",
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
    accessorKey: "ORDER_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order" />
    ),
  },
  {
    id: "requested qty",
    accessorKey: "REQUESTED_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requested Qty" />
    ),
  },
  {
    id: "serial number",
    accessorKey: "SERIAL_NUMBER",
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
    accessorKey: "SHIP_FROM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship From" />
    ),
  },
  {
    id: "ship to",
    accessorKey: "SHIP_TO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To" />
    ),
  },
  {
    id: "deliver to",
    accessorKey: "DELIVER_TO",
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
    accessorKey: "SUBINVENTORY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subinventory" />
    ),
  },
  {
    id: "batch ID",
    accessorKey: "BATCH_ID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Batch ID" />
    ),
  },
  {
    id: "item description",
    accessorKey: "ITEM_DESCRIPTION",
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
    accessorKey: "REQUESTED_QUANTITY_UOM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requested Qty UOM" />
    ),
  },
  {
    id: "requested qty",
    accessorKey: "REQUESTED_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requested Qty" />
    ),
  },
  {
    id: "picked qty",
    accessorKey: "PICKED_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Picked Qty" />
    ),
  },
  {
    id: "shipped qty",
    accessorKey: "SHIPPED_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipped Qty" />
    ),
  },
  {
    id: "backordered qty",
    accessorKey: "CYCLE_COUNT_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Backordered Qty" />
    ),
  },
  {
    id: "stage",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stage" />
    ),
  },
  {
    id: "consignee",
    accessorKey: "CUSTOMER_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Consignee" />
    ),
  },
  {
    id: "intermediate ship to",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Intermediate Ship To" />
    ),
  },
  {
    id: "ship instruction",
    accessorKey: "SHIPPING_INSTRUCTIONS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Number" />
    ),
  },
  {
    id: "packing instructions",
    accessorKey: "PACKING_INSTRUCTIONS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Packing Instructions" />
    ),
  },
  {
    id: "ship method",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship Method" />
    ),
  },
  {
    id: "parent lpn",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parent Lpn" />
    ),
  },
  {
    id: "seal code",
    accessorKey: "SEAL_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Seal Code" />
    ),
  },
  {
    id: "tracking number",
    accessorKey: "TRACKING_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tracking Number" />
    ),
  },
  {
    id: "fob",
    accessorKey: "FREIGHT_CARRIER_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fob" />
    ),
  },
  {
    id: "carrier",
    accessorKey: "FOB_POINT_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Carrier" />
    ),
  },
  {
    id: "freight terms",
    accessorKey: "FREIGHT_TERMS_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Freight Terms" />
    ),
  },
  {
    id: "weight UOM",
    accessorKey: "WEIGHT_UOM_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Weight UOM" />
    ),
  },
  {
    id: "gross weight",
    accessorKey: "GROSS_WEIGHT",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gross Weight" />
    ),
  },
  {
    id: "net weight",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Net Weight" />
    ),
  },
  {
    id: "volume UOM",
    accessorKey: "VOLUME_UOM_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Volume UOM" />
    ),
  },
];

export { columns };

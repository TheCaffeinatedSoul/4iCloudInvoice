"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "line number": true,
  type: true,
  item: true,
  category: true,
  description: true,
  UOM: true,
  quantity: true,
  price: true,
  "list price": true,
  "price type": false,
  "secondary quantity": false,
  "secondary UOM": false,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "line number",
    accessorKey: "line_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Number" />
    ),
    cell: ({
      row: {
        original: { line_num, po_header_id },
      },
    }) => {
      const encodedHeaderId = encodeURIComponent(po_header_id);
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/purchase/purchase-order/${encodedHeaderId}/${line_num}`}
        >
          {line_num}
        </Link>
      );
    },
  },
  {
    id: "type",
    accessorKey: "line_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
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
    id: "description",
    accessorKey: "item_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "category",
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    id: "UOM",
    accessorKey: "unit_meas_lookup_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "list price",
    accessorKey: "list_price_per_unit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="List Price" />
    ),
  },
  {
    id: "price",
    accessorKey: "unit_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
  },
  {
    id: "quantity",
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
  },
  {
    id: "price type",
    accessorKey: "price_type_lookup_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price Type" />
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
    id: "secondary UOM",
    accessorKey: "secondary_unit_of_measure",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary UOM" />
    ),
  },
];

export { columns };

"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
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
    id: "view",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="View" />
    ),
    cell: ({
      row: {
        original: { asset_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "#6482AD" }}
          href={`/fixed-assets/assets/${asset_id}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "asset number",
    accessorKey: "asset_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Number" />
    ),
  },
  {
    id: "description",
    accessorKey: "asset_key_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "asset key",
    accessorKey: "asset_key_segment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Key" />
    ),
  },
  {
    id: "units",
    accessorKey: "current_units",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Units" />
    ),
  },
  {
    id: "asset type",
    accessorKey: "asset_type_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Type" />
    ),
  },
  {
    id: "tag number",
    accessorKey: "tag_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tag Number" />
    ),
  },
  {
    id: "parent asset",
    accessorKey: "parent_asset",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parent Asset" />
    ),
  },
  {
    id: "Parent Description",
    accessorKey: "parent_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parent Description" />
    ),
  },
  {
    id: "manufacturer",
    accessorKey: "manudacturer_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Manufacturer" />
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
    id: "model",
    accessorKey: "model_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model" />
    ),
  },
  {
    id: "property type",
    accessorKey: "property_type_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Property Type" />
    ),
  },
  {
    id: "property class",
    accessorKey: "property_1245_1250_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Property Class" />
    ),
  },
  {
    id: "ownership",
    accessorKey: "ownlease_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ownership" />
    ),
  },
  {
    id: "bought",
    accessorKey: "newuse_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bought" />
    ),
  },
  {
    id: "category",
    accessorKey: "attribute_category_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    id: "lease number",
    accessorKey: "lease_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lease Number" />
    ),
  },
  {
    id: "commitment",
    accessorKey: "commitment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Commitment" />
    ),
  },
  {
    id: "investment law",
    accessorKey: "investment_law",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Investment Law" />
    ),
  },
];

export { columns };

"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "PO number": true,
  buyer: true,
  type: true,
  supplier: true,
  "supplier site": true,
  "ship to": false,
  "bill to": false,
  currency: true,
  "approval status": true,
  revision: false,
  "operating unit": false,
  pcard: false,
  created: false,
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
    id: "view",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="View" />
    ),
    cell: ({
      row: {
        original: { po_header_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "#6482AD" }}
          href={`/purchase/purchase-order/${po_header_id}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "PO number",
    accessorKey: "po_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Number" />
    ),
  },
  {
    id: "buyer",
    accessorKey: "agent_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Buyer" />
    ),
  },
  {
    id: "type",
    accessorKey: "type_lookup_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "supplier",
    accessorKey: "vendor_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supplier" />
    ),
  },
  {
    id: "supplier site",
    accessorKey: "vendor_site_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supplier Site" />
    ),
  },
  {
    id: "ship to",
    accessorKey: "ship_to_location_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To" />
    ),
  },
  {
    id: "bill to",
    accessorKey: "bill_to_location_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To" />
    ),
  },
  {
    id: "currency",
    accessorKey: "currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Currency" />
    ),
  },
  {
    id: "approval status",
    accessorKey: "authorization_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approval Status" />
    ),
  },
  {
    id: "revision",
    accessorKey: "revision_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revision" />
    ),
  },
  {
    id: "operating unit",
    accessorKey: "org_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Operating Unit" />
    ),
  },
  {
    id: "pcard",
    accessorKey: "pcard_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pcard" />
    ),
  },
  {
    id: "created",
    accessorKey: "creation_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({
      row: {
        original: { creation_date },
      },
    }) => {
      if (!creation_date) return "";
      const date = creation_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
];

export { columns };

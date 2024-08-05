"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
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
        original: { header_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/inventory/move-orders/${header_id}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "receipt number",
    accessorKey: "request_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Number" />
    ),
  },
  {
    id: "status",
    accessorKey: "header_status_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "description",
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "move order type",
    accessorKey: "move_order_type_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Move Order Type" />
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
    id: "location",
    accessorKey: "ship_to_site",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
  },
  {
    id: "source subinv",
    accessorKey: "from_subinventory_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source Subinv" />
    ),
  },
  {
    id: "destination subinv",
    accessorKey: "to_subinventory_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Destination Subinv" />
    ),
  },
  {
    id: "destination account",
    accessorKey: "to_account_desc",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Destination Account" />
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
];

export { columns };

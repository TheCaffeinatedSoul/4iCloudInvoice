"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "requisition number": true,
  "operating unit": true,
  type: true,
  status: true,
  preparer: true,
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
        original: { requisition_header_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "#6482AD" }}
          href={`/purchase/requisition/${requisition_header_id}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "requisition number",
    accessorKey: "requisition_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requisition Number" />
    ),
  },
  {
    id: "operating unit",
    accessorKey: "organization_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Operating Unit" />
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
    id: "status",
    accessorKey: "authorization_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "preparer",
    accessorKey: "preparer_full_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Preparer" />
    ),
  },
];

export { columns };

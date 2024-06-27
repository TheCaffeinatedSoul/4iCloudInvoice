"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import Link from "next/link";
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
    accessorKey: "S.No",
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>;
    },
  },
  {
    id: "requisition number",
    accessorKey: "requisition_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requisition Number" />
    ),
    cell: ({
      row: {
        original: { requisition_number, requisition_header_id },
      },
    }) => {
      const encodedInvoiceNumber = encodeURIComponent(requisition_header_id);
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/purchase/requisition/${encodedInvoiceNumber}`}
        >
          {requisition_number}
        </Link>
      );
    },
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

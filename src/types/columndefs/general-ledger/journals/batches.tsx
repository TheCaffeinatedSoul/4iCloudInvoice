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
        original: { je_batch_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "#6482AD" }}
          href={`/general-ledger/journals/${je_batch_id}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "name",
    accessorKey: "je_batch_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    id: "description",
    accessorKey: "je_batch_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "effective date",
    accessorKey: "effective_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Effective Date" />
    ),
    cell: ({
      row: {
        original: { effective_date },
      },
    }) => {
      if (!effective_date) return "";
      const date = effective_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "control total",
    accessorKey: "control_total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Control Total" />
    ),
  },
];

export { columns };

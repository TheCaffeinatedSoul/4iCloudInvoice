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
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>;
    },
  },
  {
    id: "name",
    accessorKey: "je_header_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    id: "description",
    accessorKey: "je_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "ledger",
    accessorKey: "ledger_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ledger" />
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

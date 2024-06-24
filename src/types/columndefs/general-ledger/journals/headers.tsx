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
    accessorKey: "ledger_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    id: "description",
    accessorKey: "ledger_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Number" />
    ),
  },
  {
    id: "category",
    accessorKey: "je_category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    id: "source",
    accessorKey: "je_source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),
  },
  {
    id: "period",
    accessorKey: "period_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period" />
    ),
  },
  {
    id: "journal",
    accessorKey: "je_header_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Journal" />
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
    id: "posting",
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Posting" />
    ),
  },
  {
    id: "effective date",
    accessorKey: "default_effective_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Effective Date" />
    ),
    cell: ({
      row: {
        original: { default_effective_date },
      },
    }) => {
      if (!default_effective_date) return "";
      const date = default_effective_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "date (reverse)",
    accessorKey: "accrual_rev_effective_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date (Reverse)" />
    ),
    cell: ({
      row: {
        original: { accrual_rev_effective_date },
      },
    }) => {
      if (!accrual_rev_effective_date) return "";
      const date = accrual_rev_effective_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "period (reverse)",
    accessorKey: "accrual_rev_period_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period (Reverse)" />
    ),
  },
  {
    id: "status (reverse)",
    accessorKey: "accrual_rev_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status (Reverse)" />
    ),
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

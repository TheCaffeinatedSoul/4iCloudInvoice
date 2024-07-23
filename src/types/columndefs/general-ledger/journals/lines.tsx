"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "line number",
    accessorKey: "je_line_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Number" />
    ),
  },
  {
    id: "account",
    accessorKey: "concatenated-segments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account" />
    ),
  },
  {
    id: "account description",
    accessorKey: "code_comb_desc",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account Description" />
    ),
  },
  {
    id: "debit",
    accessorKey: "entered_dr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Debit" />
    ),
  },
  {
    id: "credit",
    accessorKey: "entered_cr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credit" />
    ),
  },
  {
    id: "accounted debit",
    accessorKey: "accounted_dr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Accounted Debit" />
    ),
  },
  {
    id: "accounted credit",
    accessorKey: "accounted_cr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Accounted Credit" />
    ),
  },
  {
    id: "line description",
    accessorKey: "je_line_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Description" />
    ),
  },
  {
    id: "qty",
    accessorKey: "stat_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Qty" />
    ),
  },
  {
    id: "reconciliation reference",
    accessorKey: "jgzz_recon_ref_11i",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reconciliation Reference" />
    ),
  },
];

export { columns };

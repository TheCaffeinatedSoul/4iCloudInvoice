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
        original: { je_batch_id, je_header_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/general-ledger/journals/${je_batch_id}/${je_header_id}`}
        >
          <FaEye />
        </Link>
      );
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
    id: "posting status",
    accessorKey: "status_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Posting Status" />
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
    id: "reversal date",
    accessorKey: "accrual_rev_effective_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reversal Date" />
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
    id: "reversal period",
    accessorKey: "accrual_rev_period_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reversal Period" />
    ),
  },
  {
    id: "reversal status",
    accessorKey: "accrual_rev_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reversal Status" />
    ),
  },
  {
    id: "control total",
    accessorKey: "control_total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Control Total" />
    ),
  },
  {
    id: "debit",
    accessorKey: "running_total_dr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Debit" />
    ),
  },
  {
    id: "credit",
    accessorKey: "running_total_cr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credit" />
    ),
  },
  {
    id: "accounted debit",
    accessorKey: "running_total_accounted_dr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Accounted Debit" />
    ),
  },
  {
    id: "accounted credit",
    accessorKey: "running_total_accounted_cr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Accounted Credit" />
    ),
  },
  {
    id: "converstion rate",
    accessorKey: "currency_conversion_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Conversion Rate" />
    ),
  },
  {
    id: "conversion type",
    accessorKey: "currency_conversion_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Conversion Type" />
    ),
  },
  {
    id: "conversion date",
    accessorKey: "currency_conversion_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Conversion Date" />
    ),
    cell: ({
      row: {
        original: { currency_conversion_date },
      },
    }) => {
      if (!currency_conversion_date) return "";
      const date = currency_conversion_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "reference",
    accessorKey: "external_reference",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference" />
    ),
  },
  {
    id: "reconciliation reference",
    accessorKey: "jgzz_recon_ref",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reconciliation Reference" />
    ),
  },
  {
    id: "clearing company",
    accessorKey: "originating_bal_seg_value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Clearing Company" />
    ),
  },
  {
    id: "reference date",
    accessorKey: "reference_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference Date" />
    ),
    cell: ({
      row: {
        original: { reference_date },
      },
    }) => {
      if (!reference_date) return "";
      const date = reference_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
];

export { columns };

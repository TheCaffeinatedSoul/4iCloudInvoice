"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { date, z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "receipt number": true,
  "receipt method": true,
  "currency code": true,
  "receipt amount": true,
  "receipt type": true,
  "receipt date": true,
  date: true,
  category: true,
  reason: false,
  comments: false,
  type: false,
  "remittance bank name": false,
  "remittance bank branch": false,
  "remittance bank account": false,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "S.No",
    header: "S.No",
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>;
    },
  },
  {
    id: "receipt number",
    accessorKey: "receipt_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Number" />
    ),
    cell: ({
      row: {
        original: { receipt_number, cash_receipt_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/receivables/receipts/${cash_receipt_id}`}
        >
          {receipt_number}
        </Link>
      );
    },
  },
  {
    id: "receipt method",
    accessorKey: "bank_account_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Method" />
    ),
  },
  {
    id: "currency code",
    accessorKey: "currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Currency Code" />
    ),
  },
  {
    id: "receipt amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Amount" />
    ),
  },
  {
    id: "receipt type",
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Type" />
    ),
  },
  {
    id: "receipt date",
    accessorKey: "receipt_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Date" />
    ),
    cell: ({
      row: {
        original: { receipt_date },
      },
    }) => {
      if (!receipt_date) return "";
      const date = receipt_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "date",
    accessorKey: "reversal_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({
      row: {
        original: { reversal_date },
      },
    }) => {
      if (!reversal_date) return "";
      const date = reversal_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "category",
    accessorKey: "reversal_category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    id: "reason",
    accessorKey: "reversal_reason_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reason" />
    ),
  },
  {
    id: "comments",
    accessorKey: "reversal_comments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Comments" />
    ),
  },
  {
    id: "type",
    accessorKey: "exchange_rate_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "remittance bank name",
    accessorKey: "bank_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remittance Bank Name" />
    ),
  },
  {
    id: "remittance bank branch",
    accessorKey: "customer_bank_branch_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remittance Bank Branch" />
    ),
  },
  {
    id: "remittance bank account",
    accessorKey: "bank_account_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remittance Bank Account" />
    ),
  },
];

export { columns };

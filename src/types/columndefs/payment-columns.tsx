"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  "GL date": true,
  amount: true,
  "document number": true,
  "payment date": true,
  currency: true,
  "check amount": true,
  "payment process request": false,
  status: false,
  "cleared amount": false,
  "cleared date": false,
  "bank name": true,
  account: true,
  "payment document": false,
  "payment method": false,
  "discount taken": false,
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
    id: "GL date",
    accessorKey: "accounting_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Date" />
    ),
    cell: ({
      row: {
        original: { accounting_date },
      },
    }) => {
      if (!accounting_date) return "";
      const date = accounting_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    id: "document number",
    accessorKey: "check_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Number" />
    ),
  },
  {
    id: "payment date",
    accessorKey: "check_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Date" />
    ),
    cell: ({
      row: {
        original: { check_date },
      },
    }) => {
      if (!check_date) return "";
      const date = check_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "currency",
    accessorKey: "currency_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Currency" />
    ),
  },
  {
    id: "check amount",
    accessorKey: "check_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Check Amount" />
    ),
  },
  {
    id: "payment process request",
    accessorKey: "checkrun_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Process Request" />
    ),
  },
  {
    id: "status",
    accessorKey: "check_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "cleared amount",
    accessorKey: "cleared_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cleared Amount" />
    ),
  },
  {
    id: "cleared date",
    accessorKey: "cleared_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cleared Date" />
    ),
    cell: ({
      row: {
        original: { cleared_date },
      },
    }) => {
      if (!cleared_date) return "";
      const date = cleared_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "bank name",
    accessorKey: "bank_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bank Name" />
    ),
  },
  {
    id: "account",
    accessorKey: "current_bank_account_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account" />
    ),
  },
  {
    id: "payment document",
    accessorKey: "payment_document_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Document" />
    ),
  },
  {
    id: "payment method",
    accessorKey: "payment_method_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
  },
  {
    id: "discount taken",
    accessorKey: "discount_taken",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Discount Taken" />
    ),
  },
];

export { columns };

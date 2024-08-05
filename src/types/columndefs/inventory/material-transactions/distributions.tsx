"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
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
    id: "transaction date",
    accessorKey: "transaction_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Date" />
    ),
    cell: ({
      row: {
        original: { transaction_date },
      },
    }) => {
      if (!transaction_date) return "";
      const date = transaction_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "account",
    accessorKey: "account",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account" />
    ),
  },
  {
    id: "transaction value",
    accessorKey: "base_transaction_value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Value" />
    ),
  },
  {
    id: "item",
    accessorKey: "item_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
  },
  {
    id: "description",
    accessorKey: "item_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "transaction type",
    accessorKey: "transaction_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Type" />
    ),
  },
  {
    id: "UOM",
    accessorKey: "transaction_uom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "quantity",
    accessorKey: "transaction_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
  },
  {
    id: "revision",
    accessorKey: "revision",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revision" />
    ),
  },
  {
    id: "subinventory",
    accessorKey: "subinventory_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subinventory" />
    ),
  },
  {
    id: "locator",
    accessorKey: "locator",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Locator" />
    ),
  },
  {
    id: "org",
    accessorKey: "organization_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Org" />
    ),
  },
  {
    id: "transaction source type",
    accessorKey: "transaction_source_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Source Type" />
    ),
  },
  {
    id: "primary quantity",
    accessorKey: "primary_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primary Quantity" />
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
    id: "conversion rate",
    accessorKey: "currency_conversion_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Conversion Rate" />
    ),
  },
  {
    id: "type",
    accessorKey: "conversion_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    id: "date",
    accessorKey: "currency_conversion_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
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
    id: "reason",
    accessorKey: "reason",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reason" />
    ),
  },
  {
    id: "reference",
    accessorKey: "reference",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference" />
    ),
  },
  {
    id: "GL batch",
    accessorKey: "gl_batch",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GL Batch" />
    ),
  },
  {
    id: "transaction flow type",
    accessorKey: "transaction_flow_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Flow Type" />
    ),
  },
  {
    id: "unit cost",
    accessorKey: "unit_cost",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit Cost" />
    ),
  },
  {
    id: "accounting type",
    accessorKey: "accounting_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Accounting Type" />
    ),
  },
];

export { columns };

"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
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
    id: "period",
    accessorKey: "period_entered",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period" />
    ),
  },
  {
    id: "depreciation amount",
    accessorKey: "deprn_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Depreciation Amount" />
    ),
  },
  {
    id: "adjustment amount",
    accessorKey: "asjustment_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Adjustment Amount" />
    ),
  },
  {
    id: "bonus depreciation amount",
    accessorKey: "bonus_deprn_amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Bonus Depreciation Amount"
      />
    ),
  },
  {
    id: "bonus adjustment amount",
    accessorKey: "bonus_adjustment_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bonus Adjustment Amount" />
    ),
  },
  {
    id: "revaluation amortization",
    accessorKey: "reval_amortization",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revaluation Amortization" />
    ),
  },
  {
    id: "total amount",
    accessorKey: "total_deprn_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Amount" />
    ),
  },
];

export { columns };

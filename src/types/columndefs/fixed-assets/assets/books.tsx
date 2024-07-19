"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
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
    accessorKey: "S.No",
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>;
    },
  },
  {
    id: "view",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="View" />
    ),
    cell: ({
      row: {
        original: { asset_id, transaction_header_id_in },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/fixed-assets/assets/${asset_id}/${transaction_header_id_in}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "book",
    accessorKey: "book_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Book" />
    ),
  },
  {
    id: "asset number",
    accessorKey: "asset_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset Number" />
    ),
  },
  {
    id: "date in service",
    accessorKey: "date_placed_in_service",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date In Service" />
    ),
    cell: ({
      row: {
        original: { date_placed_in_service },
      },
    }) => {
      if (!date_placed_in_service) return "";
      const date = date_placed_in_service.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "method",
    accessorKey: "deprn_method_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Method" />
    ),
  },
  {
    id: "months",
    accessorKey: "life_in_months",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Months" />
    ),
  },
  {
    id: "current cost",
    accessorKey: "cost",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Current Cost" />
    ),
  },
  {
    id: "original cost",
    accessorKey: "original_cost",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Original Cost" />
    ),
  },
  {
    id: "salvage value",
    accessorKey: "salvage_value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salvage Value" />
    ),
  },
  {
    id: "prorate convention",
    accessorKey: "prorate_convention_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prorate Convention" />
    ),
  },
  {
    id: "prorate date",
    accessorKey: "prorate_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prorate Date" />
    ),
    cell: ({
      row: {
        original: { prorate_date },
      },
    }) => {
      if (!prorate_date) return "";
      const date = prorate_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "Depreciate",
    accessorKey: "depreciate_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Depreciate" />
    ),
  },
  {
    id: "bonus rule",
    accessorKey: "bonus_rule",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bonus Rule" />
    ),
  },
  {
    id: "ceiling",
    accessorKey: "ceiling_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ceiling" />
    ),
  },
  {
    id: "recoverable cost",
    accessorKey: "recoverable_cost",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Recoverable Cost" />
    ),
  },
  {
    id: "revaluation ceiling",
    accessorKey: "reval_ceiling",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revaluation Ceiling" />
    ),
  },
  {
    id: "salvage value percent",
    accessorKey: "percent_salvage_value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salvage Value Percent" />
    ),
  },
  {
    id: "percent",
    accessorKey: "allowed_deprn_limit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Percent" />
    ),
  },
  {
    id: "line amount",
    accessorKey: "allowed_deprn_limit_amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Amount" />
    ),
  },
  {
    id: "salvage value type",
    accessorKey: "salvage_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salvage Value Type" />
    ),
  },
  {
    id: "type",
    accessorKey: "deprn_limit_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
];

export { columns };

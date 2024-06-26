"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "line number": true,
  type: true,
  item: true,
  category: true,
  description: true,
  UOM: true,
  quantity: true,
  price: true,
  "need-by": true,
  "destination type": false,
  requester: false,
  organization: false,
  location: false,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "line number",
    accessorKey: "line_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Number" />
    ),
    cell: ({
      row: {
        original: { line_num, requisition_number },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/purchase/requisition/${requisition_number}/${line_num}`}
        >
          {line_num}
        </Link>
      );
    },
  },
  {
    id: "type",
    accessorKey: "line_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
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
    id: "category",
    accessorKey: "category_segment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
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
    id: "UOM",
    accessorKey: "unit_meas_lookup_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "quantity",
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
  },
  {
    id: "price",
    accessorKey: "unit_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
  },
  {
    id: "need-by",
    accessorKey: "need_by_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Need-By" />
    ),
    cell: ({
      row: {
        original: { need_by_date },
      },
    }) => {
      if (!need_by_date) return "";
      const date = need_by_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "destination type",
    accessorKey: "destination_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Destination Type" />
    ),
  },
  {
    id: "requester",
    accessorKey: "to_person_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requester" />
    ),
  },
  {
    id: "organization",
    accessorKey: "org_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organization" />
    ),
  },
  {
    id: "location",
    accessorKey: "deliver_to_location_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
  },
];

export { columns };

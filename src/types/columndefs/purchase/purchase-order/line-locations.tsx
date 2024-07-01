"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "line number": true,
  quantity: true,
  UOM: true,
  "ship to": true,
  "need by": true,
  "promised date": true,
  organization: true,
  "country of origin": true,
  "note for receiver": false,
  "secondary UOM": false,
  "secondary quantity": false,
  grade: false,
  amount: false,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "line number",
    accessorKey: "po_line_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Number" />
    ),
    cell: ({
      row: {
        original: { po_header_id, po_line_num, line_location_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/purchase/purchase-order/${po_header_id}/${po_line_num}/${line_location_id}`}
        >
          {po_line_num}
        </Link>
      );
    },
  },
  {
    id: "quantity",
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
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
    id: "ship to",
    accessorKey: "ship_to_location_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To" />
    ),
  },
  {
    id: "need by",
    accessorKey: "need_by_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Need By" />
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
    id: "promised date",
    accessorKey: "promised_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Promised Date" />
    ),
    cell: ({
      row: {
        original: { promised_date },
      },
    }) => {
      if (!promised_date) return "";
      const date = promised_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "organization",
    accessorKey: "ship_to_organization_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organization" />
    ),
  },
  {
    id: "country of origin",
    accessorKey: "country_of_origin_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country of Origin" />
    ),
  },
  {
    id: "note for receiver",
    accessorKey: "note_to_receiver",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Note for Receiver" />
    ),
  },
  {
    id: "secondary UOM",
    accessorKey: "secondary_unit_of_measure",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary UOM" />
    ),
  },
  {
    id: "secondary quantity",
    accessorKey: "secondary_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary Quantity" />
    ),
  },
  {
    id: "grade",
    accessorKey: "preferred_grade",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Grade" />
    ),
  },
  {
    id: "amount",
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
];

export { columns };

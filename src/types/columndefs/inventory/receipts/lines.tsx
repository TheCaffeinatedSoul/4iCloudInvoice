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
    id: "view",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="View" />
    ),
    cell: ({
      row: {
        original: { SHIPMENT_HEADER_ID, PO_LINE_ID },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "#6482AD" }}
          href={`/inventory/receipts/${SHIPMENT_HEADER_ID}/${PO_LINE_ID}`}
        >
          <FaEye />
        </Link>
      );
    },
  },
  {
    id: "line number",
    accessorKey: "LINE_NUM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Number" />
    ),
  },
  {
    id: "category",
    accessorKey: "CATEGORY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    id: "quantity",
    accessorKey: "QUANTITY_RECEIVED",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
  },
  {
    id: "UOM",
    accessorKey: "UNIT_OF_MEASURE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "item",
    accessorKey: "ITEM_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
  },
  {
    id: "description",
    accessorKey: "ITEM_DESCRIPTION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    id: "revision",
    accessorKey: "ITEM_REVISION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revision" />
    ),
  },
  {
    id: "order type",
    accessorKey: "SOURCE_DOCUMENT_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Type" />
    ),
  },
  {
    id: "number",
    accessorKey: "PO_HEADER_NUM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
  },
  {
    id: "routing",
    accessorKey: "ROUTING_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Routing" />
    ),
  },
  {
    id: "destination",
    accessorKey: "DESTINATION_TYPE_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Destination" />
    ),
    cell: ({
      row: {
        original: { DESTINATION_TYPE_CODE, EMPLOYEE_NAME },
      },
    }) => {
      return (
        <div>
          {EMPLOYEE_NAME}, {DESTINATION_TYPE_CODE}
        </div>
      );
    },
  },
  {
    id: "operating unit",
    accessorKey: "TO_ORGANIZATION_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Operating Unit" />
    ),
  },
  {
    id: "locator",
    accessorKey: "LOCATOR_DESCRIPTION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Locator" />
    ),
  },
  {
    id: "date",
    accessorKey: "PROGRAM_UPDATE_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({
      row: {
        original: { PROGRAM_UPDATE_DATE },
      },
    }) => {
      if (!PROGRAM_UPDATE_DATE) return "";
      const date = PROGRAM_UPDATE_DATE.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
];

export { columns };

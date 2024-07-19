"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
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
    id: "receipt number",
    accessorKey: "RECEIPT_NUM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receipt Number" />
    ),
    cell: ({
      row: {
        original: { REQUEST_ID, RECEIPT_NUM },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/inventory/receipts/${REQUEST_ID}`}
        >
          {RECEIPT_NUM}
        </Link>
      );
    },
  },
  {
    id: "shipment number",
    accessorKey: "SHIPMENT_NUM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipment Number" />
    ),
  },
  {
    id: "packing slip",
    accessorKey: "PACKING_SLIP",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Packing Slip" />
    ),
  },
  {
    id: "carrier",
    accessorKey: "CARRIER_METHOD",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Carrier" />
    ),
  },
  {
    id: "number of containers",
    accessorKey: "NUM_OF_CONTAINERS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number Of Containers" />
    ),
  },
  {
    id: "supplier",
    accessorKey: "VENDOR_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supplier" />
    ),
  },
  {
    id: "shipped date",
    accessorKey: "SHIPPED_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipped Date" />
    ),
    cell: ({
      row: {
        original: { SHIPPED_DATE },
      },
    }) => {
      if (!SHIPPED_DATE) return "";
      const date = SHIPPED_DATE.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "waybill / airbill",
    accessorKey: "WAYBILL_AIRBILL_NUM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Waybill / Airbill" />
    ),
  },
  {
    id: "bill of lading",
    accessorKey: "BILL_OF_LADING",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill Of Lading" />
    ),
  },
  {
    id: "receiver",
    accessorKey: "EMPLOYEE_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receiver" />
    ),
  },
  {
    id: "comments",
    accessorKey: "COMMENTS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Comments" />
    ),
  },
];

export { columns };

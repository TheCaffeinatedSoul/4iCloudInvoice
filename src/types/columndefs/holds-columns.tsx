"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "#": true,
  "hold ID": true,
  "held by": true,
  "hold date": true,
  "hold reason": true,
  "release name": true,
  "release reason": true,
  "release date": true,
  "WF status": true,
};

const columns: ColumnDef<z.infer<any>>[] = [
  {
    id: "#",
    header: "S.No",
    cell: ({ row: { index }, table: { getState } }) => {
      const {
        pagination: { pageIndex, pageSize },
      } = getState();
      return pageIndex * pageSize + index + 1;
    },
  },
  {
    id: "hold ID",
    accessorKey: "hold_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hold ID" />
    ),
  },
  {
    id: "held by",
    accessorKey: "held_by_user_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Held By" />
    ),
  },
  {
    id: "hold date",
    accessorKey: "hold_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hold Date" />
    ),
    cell: ({
      row: {
        original: { hold_date },
      },
    }) => {
      return hold_date.split(" ")[0];
    },
  },
  {
    id: "hold reason",
    accessorKey: "hold_reason",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hold Reason" />
    ),
  },
  {
    id: "release name",
    accessorKey: "release_lookup_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Release Name" />
    ),
  },
  {
    id: "release reason",
    accessorKey: "release_reason",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Release Reason" />
    ),
  },
  {
    id: "release date",
    accessorKey: "release_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Release Date" />
    ),
  },
  {
    id: "WF status",
    accessorKey: "wf_status_meaning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="WF Status" />
    ),
  },
];

export { columns };

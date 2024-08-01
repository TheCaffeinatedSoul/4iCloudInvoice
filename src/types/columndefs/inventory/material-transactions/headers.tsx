"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {
  "S.No": true,
  view: true,
  item: true,
  revision: true,
  "operating unit": true,
  Organization: true,
  subinventory: true,
  locator: true,
  "transaction type": true,
  "transaction action": true,
  "source type": true,
  "transaction quantity": true,
  "transaction UOM": true,
  "primary quantity": true,
  "transaction date": true,
  reference: false,
  reason: false,
  "department code": false,
  "transaction header": false,
  "source code": false,
  "transfer org": false,
  "transfer subinventory": false,
  "shipment number": false,
  "waybill / airbill": false,
  "freight code": false,
  containers: false,
  "task number": false,
  "to task number": false,
  "project number": false,
  "to project number": false,
  "source project number": false,
  "source task number": false,
  "expenditure type": false,
  "error code": false,
  "error explanation": false,
  "owning party": false,
  "planning party": false,
  "secondary UOM": false,
  "secondary quantity": false,
  location: false,
};

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
        original: { transaction_id },
      },
    }) => {
      return (
        <Link
          style={{ textDecoration: "underline", color: "blue" }}
          href={`/inventory/material-transactions/${transaction_id}`}
        >
          <FaEye />
        </Link>
      );
    },
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
    id: "revision",
    accessorKey: "revision",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revision" />
    ),
  },
  {
    id: "operating unit",
    accessorKey: "operating_unit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Operating Unit" />
    ),
  },
  {
    id: "organization",
    accessorKey: "organization_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organization" />
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
    accessorKey: "locator_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Locator" />
    ),
  },
  {
    id: "transaction type",
    accessorKey: "transaction_type_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Type" />
    ),
  },
  {
    id: "transaction action",
    accessorKey: "transaction_action_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Action" />
    ),
  },
  {
    id: "source type",
    accessorKey: "transaction_source_type_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source Type" />
    ),
  },
  {
    id: "transaction quantity",
    accessorKey: "transaction_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Quantity" />
    ),
  },
  {
    id: "transaction UOM",
    accessorKey: "transaction_uom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction UOM" />
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
    id: "reference",
    accessorKey: "transaction_reference",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reference" />
    ),
  },
  {
    id: "reason",
    accessorKey: "reason_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reason" />
    ),
  },
  {
    id: "department code",
    accessorKey: "department_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Department Code" />
    ),
  },
  {
    id: "transaction header",
    accessorKey: "transaction_set_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Header" />
    ),
  },
  {
    id: "source code",
    accessorKey: "source_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source Code" />
    ),
  },
  {
    id: "transfer org",
    accessorKey: "transfer_org_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transfer Org" />
    ),
  },
  {
    id: "transfer subinventory",
    accessorKey: "transfer_subinventory",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transfer Subinventory" />
    ),
  },
  {
    id: "shipment number",
    accessorKey: "shipment_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipment Number" />
    ),
  },
  {
    id: "waybill / airbill",
    accessorKey: "waybill_airbill",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Waybill/ Airbill" />
    ),
  },
  {
    id: "freight code",
    accessorKey: "freight_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Freight Code" />
    ),
  },
  {
    id: "containers",
    accessorKey: "number_of_containers",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Containers" />
    ),
  },
  {
    id: "task number",
    accessorKey: "task_num",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task Number" />
    ),
  },
  {
    id: "to task number",
    accessorKey: "to_task_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="To Task Number" />
    ),
  },
  {
    id: "project number",
    accessorKey: "project_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Number" />
    ),
  },
  {
    id: "to project number",
    accessorKey: "to_project_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="To Project Number" />
    ),
  },
  {
    id: "source project number",
    accessorKey: "source_project_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source Project Number" />
    ),
  },
  {
    id: "source task number",
    accessorKey: "source_task_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source Task Number" />
    ),
  },
  {
    id: "expenditure type",
    accessorKey: "expenditure_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expenditure Type" />
    ),
  },
  {
    id: "error code",
    accessorKey: "error_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Error Code" />
    ),
  },
  {
    id: "error explanation",
    accessorKey: "error_explanation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Error Explanation" />
    ),
  },
  {
    id: "owning party",
    accessorKey: "owning_organization_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Owning Party" />
    ),
    cell: ({
      row: {
        original: { owning_organization_code, owning_organization_name },
      },
    }) => {
      return (
        <div>
          {owning_organization_code}, {owning_organization_name}
        </div>
      );
    },
  },
  {
    id: "planning party",
    accessorKey: "planning_organization_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Planning Party" />
    ),
    cell: ({
      row: {
        original: { planning_organization_code, planning_organization_name },
      },
    }) => {
      return (
        <div>
          {planning_organization_code}, {planning_organization_name}
        </div>
      );
    },
  },
  {
    id: "secondary UOM",
    accessorKey: "secondary_uom_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary UOM" />
    ),
  },
  {
    id: "secondary quantity",
    accessorKey: "secondary_transaction_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary Quantity" />
    ),
  },
  {
    id: "location",
    accessorKey: "ship_to_location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
  },
];

export { columns };

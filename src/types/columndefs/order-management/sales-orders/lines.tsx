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
    id: "ordered item",
    accessorKey: "ordered_item",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ordered Item" />
    ),
  },
  {
    id: "quantity ordered",
    accessorKey: "ordered_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity Ordered" />
    ),
  },
  {
    id: "UOM",
    accessorKey: "order_quantity_uom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "unit price",
    accessorKey: "unit_selling_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit Price" />
    ),
  },
  {
    id: "extended price",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Extended Price" />
    ),
    cell: ({
      row: {
        original: { unit_selling_price, ordered_quantity },
      },
    }) => {
      return <div>{unit_selling_price * ordered_quantity}</div>;
    },
  },
  {
    id: "request date",
    accessorKey: "request_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Request Date" />
    ),
    cell: ({
      row: {
        original: { request_date },
      },
    }) => {
      if (!request_date) return "";
      const date = request_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "schedule ship date",
    accessorKey: "schedule_ship_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Schedule Ship Date" />
    ),
    cell: ({
      row: {
        original: { schedule_ship_date },
      },
    }) => {
      if (!schedule_ship_date) return "";
      const date = schedule_ship_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "status",
    accessorKey: "flow_status_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "line type",
    accessorKey: "item_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Type" />
    ),
  },
  {
    id: "quantity cancelled",
    accessorKey: "cancelled_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity Cancelled" />
    ),
  },
  {
    id: "quantity shipped",
    accessorKey: "shipped_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity Shipped" />
    ),
  },
  {
    id: "reason",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reason" />
    ),
  },
  {
    id: "comments",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Comments" />
    ),
  },
  {
    id: "salesrep",
    accessorKey: "salesrep_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salesrep" />
    ),
  },
  {
    id: "qty order source",
    accessorKey: "order_source_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Qty Order Source" />
    ),
  },
  {
    id: "order source reference",
    accessorKey: "orig_sys_document_ref",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Source Reference" />
    ),
  },
  {
    id: "order source line reference",
    accessorKey: "orig_sys_line_ref",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Order Source Line Reference"
      />
    ),
  },
  {
    id: "pricing quantity",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing Quantity" />
    ),
  },
  {
    id: "pricing context",
    accessorKey: "pricing_context",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing Context" />
    ),
  },
  {
    id: "list price",
    accessorKey: "unit_list_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="List Price" />
    ),
  },
  {
    id: "price list",
    accessorKey: "price_list_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price List" />
    ),
  },
  {
    id: "line charges",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Charges" />
    ),
  },
  {
    id: "tax amount",
    accessorKey: "tax_value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Amount" />
    ),
  },
  {
    id: "calculate price flag",
    accessorKey: "calculate_price_flag",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Calculate Price Flag" />
    ),
  },
  {
    id: "payment terms",
    accessorKey: "payment_terms",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Terms" />
    ),
  },
  {
    id: "agreement",
    accessorKey: "agreement_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Agreement" />
    ),
  },
  {
    id: "pricing UOM",
    accessorKey: "pricing_quantity_uom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing UOM" />
    ),
  },
  {
    id: "pricing date",
    accessorKey: "pricing_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing Date" />
    ),
  },
  {
    id: "ship to customer",
    accessorKey: "ship_to_customer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Customer" />
    ),
  },
  {
    id: "ship to",
    accessorKey: "ship_to",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To" />
    ),
  },
  {
    id: "ship to contact",
    accessorKey: "ship_to_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Contact" />
    ),
  },
  {
    id: "bill to customer",
    accessorKey: "bill_to_customer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Customer" />
    ),
  },
  {
    id: "bill to",
    accessorKey: "bill_to",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To" />
    ),
  },
  {
    id: "bill to contact",
    accessorKey: "bill_to_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Contact" />
    ),
  },
  {
    id: "ship to address 1",
    accessorKey: "ship_to_address_1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address 1" />
    ),
  },
  {
    id: "ship to address 2",
    accessorKey: "ship_to_address_2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address 2" />
    ),
  },
  {
    id: "ship to address 3",
    accessorKey: "ship_to_address_3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address 3" />
    ),
  },
  {
    id: "ship to address 5",
    accessorKey: "ship_to_address_5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address 5" />
    ),
  },
  {
    id: "bill to address 1",
    accessorKey: "bill_to_address_1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address 1" />
    ),
  },
  {
    id: "bill to address 2",
    accessorKey: "bill_to_address_2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address 2" />
    ),
  },
  {
    id: "bill to address 3",
    accessorKey: "bill_to_address_3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address 3" />
    ),
  },
  {
    id: "bill to address 5",
    accessorKey: "bill_to_address_5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address 5" />
    ),
  },
  {
    id: "deliver to location",
    accessorKey: "deliver_to_location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deliver To Location" />
    ),
  },
  {
    id: "deliver to contact",
    accessorKey: "deliver_to_contact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deliver To Contact" />
    ),
  },
  {
    id: "warehouse",
    accessorKey: "ship_from_org_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Warehouse" />
    ),
  },
  {
    id: "Receiving Org",
    accessorKey: "ship_to_org_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receiving Org" />
    ),
  },
  {
    id: "source type",
    accessorKey: "source_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source Type" />
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
    id: "schedule arrival date",
    accessorKey: "schedule_arrival_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Schedule Arrival Date" />
    ),
    cell: ({
      row: {
        original: { schedule_arrival_date },
      },
    }) => {
      if (!schedule_arrival_date) return "";
      const date = schedule_arrival_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "promise date",
    accessorKey: "promise_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Promise Date" />
    ),
    cell: ({
      row: {
        original: { promise_date },
      },
    }) => {
      if (!promise_date) return "";
      const date = promise_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "qty reserved",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Qty Reserved" />
    ),
  },
  {
    id: "planning priority",
    accessorKey: "planning_priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Planning Priority" />
    ),
  },
  {
    id: "qty shipped",
    accessorKey: "shipping_quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Qty Shipped" />
    ),
  },
  {
    id: "ship set",
    accessorKey: "ship_set_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship Set" />
    ),
  },
  {
    id: "arrival set",
    accessorKey: "arrival_set_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Arrival Set" />
    ),
  },
  {
    id: "fulfillment set",
    accessorKey: "fulfillment_method_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fulfillment Set" />
    ),
  },
  {
    id: "shipping method",
    accessorKey: "shipping_method_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Method" />
    ),
  },
  {
    id: "shipping priority",
    accessorKey: "shipment_priority_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Priority" />
    ),
  },
  {
    id: "freight terms",
    accessorKey: "freight_terms_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Freight Terms" />
    ),
  },
  {
    id: "shipping instructions",
    accessorKey: "shipping_instructions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Instructions" />
    ),
  },
  {
    id: "packing instructions",
    accessorKey: "packing_instructions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Packing Instructions" />
    ),
  },
  {
    id: "service reference type",
    accessorKey: "service_reference_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Reference Type" />
    ),
  },
  {
    id: "service order type",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Order Type" />
    ),
  },
  {
    id: "service ref order number",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Service Ref. Order Number"
      />
    ),
  },
  {
    id: "service ref line number",
    accessorKey: "service_reference_line_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Ref. Line Number" />
    ),
  },
  {
    id: "service ref shipment number",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Service Ref. Shipment Number"
      />
    ),
  },
  {
    id: "service ref option number",
    accessorKey: "service_bill_option_code",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Service Ref. Option Number"
      />
    ),
  },
  {
    id: "service ref cust product",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Service Ref. Cust. Product"
      />
    ),
  },
  {
    id: "service ref system name",
    accessorKey: "service_reference_system_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Ref. System Name" />
    ),
  },
  {
    id: "service start date",
    accessorKey: "service_start_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Start Date" />
    ),
    cell: ({
      row: {
        original: { service_start_date },
      },
    }) => {
      if (!service_start_date) return "";
      const date = service_start_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "service end date",
    accessorKey: "service_end_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service End Date" />
    ),
    cell: ({
      row: {
        original: { service_end_date },
      },
    }) => {
      if (!service_end_date) return "";
      const date = service_end_date.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "service duration",
    accessorKey: "service_duration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Duration" />
    ),
  },
  {
    id: "service period",
    accessorKey: "service_period",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Period" />
    ),
  },
  {
    id: "service number",
    accessorKey: "service_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Number" />
    ),
  },
  {
    id: "service txn reason",
    accessorKey: "service_txn_reason_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Txn. Reason" />
    ),
  },
  {
    id: "service txn comments",
    accessorKey: "service_txn_comments",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Txn. Comments" />
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
    id: "project number",
    accessorKey: "project_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Number" />
    ),
  },
  {
    id: "task number",
    accessorKey: "task_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task Number" />
    ),
  },
  {
    id: "unit number",
    accessorKey: "end_item_unit_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit Number" />
    ),
  },
  {
    id: "customer job",
    accessorKey: "customer_job",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Job" />
    ),
  },
  {
    id: "production line",
    accessorKey: "customer_production_line",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Production Line" />
    ),
  },
  {
    id: "model serial number",
    accessorKey: "cust_model_serial_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model Serial Number" />
    ),
  },
  {
    id: "customer dock",
    accessorKey: "customer_dock_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Dock" />
    ),
  },
  {
    id: "customer production sequence",
    accessorKey: "cust_production_seq_num",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Customer Production Sequence"
      />
    ),
  },
  {
    id: "intermediate ship to",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Intermediate Ship To" />
    ),
  },
  {
    id: "industry information",
    accessorKey: "industry_context",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Industry Information" />
    ),
  },
  {
    id: "trading partner information",
    accessorKey: "",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Trading Partner Information"
      />
    ),
  },
  {
    id: "rla schedule",
    accessorKey: "rla_schedule_type_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rla Schedule" />
    ),
  },
];

export { columns };

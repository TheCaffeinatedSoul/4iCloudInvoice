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
    id: "ordered item",
    accessorKey: "ORDERED_ITEM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ordered Item" />
    ),
  },
  {
    id: "quantity ordered",
    accessorKey: "ORDERED_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity Ordered" />
    ),
  },
  {
    id: "UOM",
    accessorKey: "ORDER_QUANTITY_UOM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UOM" />
    ),
  },
  {
    id: "unit price",
    accessorKey: "UNIT_SELLING_PRICE",
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
    accessorKey: "REQUEST_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Request Date" />
    ),
    cell: ({
      row: {
        original: { REQUEST_DATE },
      },
    }) => {
      if (!REQUEST_DATE) return "";
      const date = REQUEST_DATE.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "schedule ship date",
    accessorKey: "SCHEDULE_SHIP_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Schedule Ship Date" />
    ),
    cell: ({
      row: {
        original: { SCHEDULE_SHIP_DATE },
      },
    }) => {
      if (!SCHEDULE_SHIP_DATE) return "";
      const date = SCHEDULE_SHIP_DATE.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "status",
    accessorKey: "FLOW_STATUS_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "line type",
    accessorKey: "ITEM_TYPE_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Line Type" />
    ),
  },
  {
    id: "quantity cancelled",
    accessorKey: "CANCELLED_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity Cancelled" />
    ),
  },
  {
    id: "quantity shipped",
    accessorKey: "SHIPPED_QUANTITY",
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
    accessorKey: "SALESREP_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salesrep" />
    ),
  },
  {
    id: "qty order source",
    accessorKey: "ORDER_SOURCE_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Qty Order Source" />
    ),
  },
  {
    id: "order source reference",
    accessorKey: "ORIG_SYS_DOCUMENT_REF",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Source Reference" />
    ),
  },
  {
    id: "order source line reference",
    accessorKey: "ORIG_SYS_LINE_REF",
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
    accessorKey: "PRICING_CONTEXT",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing Context" />
    ),
  },
  {
    id: "list price",
    accessorKey: "UNIT_LIST_PRICE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="List Price" />
    ),
  },
  {
    id: "price list",
    accessorKey: "PRICE_LIST_NAME",
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
    accessorKey: "TAX_VALUE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Amount" />
    ),
  },
  {
    id: "calculate price flag",
    accessorKey: "CALCULATE_PRICE_FLAG",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Calculate Price Flag" />
    ),
  },
  {
    id: "payment terms",
    accessorKey: "PAYMENT_TERMS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Terms" />
    ),
  },
  {
    id: "agreement",
    accessorKey: "AGREEMENT_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Agreement" />
    ),
  },
  {
    id: "pricing UOM",
    accessorKey: "PRICING_QUANTITY_UOM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing UOM" />
    ),
  },
  {
    id: "pricing date",
    accessorKey: "PRICING_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing Date" />
    ),
  },
  {
    id: "ship to customer",
    accessorKey: "SHIP_TO_CUSTOMER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Customer" />
    ),
  },
  {
    id: "ship to",
    accessorKey: "SHIP_TO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To" />
    ),
  },
  {
    id: "ship to contact",
    accessorKey: "SHIP_TO_CONTACT",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Contact" />
    ),
  },
  {
    id: "bill to customer",
    accessorKey: "BILL_TO_CUSTOMER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Customer" />
    ),
  },
  {
    id: "bill to",
    accessorKey: "BILL_TO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To" />
    ),
  },
  {
    id: "bill to contact",
    accessorKey: "BILL_TO_CONTACT",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Contact" />
    ),
  },
  {
    id: "ship to address 1",
    accessorKey: "SHIP_TO_ADDRESS_1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address 1" />
    ),
  },
  {
    id: "ship to address 2",
    accessorKey: "SHIP_TO_ADDRESS_2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address 2" />
    ),
  },
  {
    id: "ship to address 3",
    accessorKey: "SHIP_TO_ADDRESS_3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address 3" />
    ),
  },
  {
    id: "ship to address 5",
    accessorKey: "SHIP_TO_ADDRESS_5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship To Address 5" />
    ),
  },
  {
    id: "bill to address 1",
    accessorKey: "BILL_TO_ADDRESS_1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address 1" />
    ),
  },
  {
    id: "bill to address 2",
    accessorKey: "BILL_TO_ADDRESS_2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address 2" />
    ),
  },
  {
    id: "bill to address 3",
    accessorKey: "BILL_TO_ADDRESS_3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address 3" />
    ),
  },
  {
    id: "bill to address 5",
    accessorKey: "BILL_TO_ADDRESS_5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill To Address 5" />
    ),
  },
  {
    id: "deliver to location",
    accessorKey: "DELIVER_TO_LOCATION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deliver To Location" />
    ),
  },
  {
    id: "deliver to contact",
    accessorKey: "DELIVER_TO_CONTACT",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deliver To Contact" />
    ),
  },
  {
    id: "warehouse",
    accessorKey: "SHIP_FROM_ORG_NAME",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Warehouse" />
    ),
  },
  {
    id: "Receiving Org",
    accessorKey: "SHIP_TO_ORG_ID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receiving Org" />
    ),
  },
  {
    id: "source type",
    accessorKey: "SOURCE_TYPE_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source Type" />
    ),
  },
  {
    id: "document number",
    accessorKey: "CHECK_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Number" />
    ),
  },
  {
    id: "schedule arrival date",
    accessorKey: "SCHEDULE_ARRIVAL_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Schedule Arrival Date" />
    ),
    cell: ({
      row: {
        original: { SCHEDULE_ARRIVAL_DATE },
      },
    }) => {
      if (!SCHEDULE_ARRIVAL_DATE) return "";
      const date = SCHEDULE_ARRIVAL_DATE.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "promise date",
    accessorKey: "PROMISE_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Promise Date" />
    ),
    cell: ({
      row: {
        original: { PROMISE_DATE },
      },
    }) => {
      if (!PROMISE_DATE) return "";
      const date = PROMISE_DATE.split(" ")[0];
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
    accessorKey: "PLANNING_PRIORITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Planning Priority" />
    ),
  },
  {
    id: "qty shipped",
    accessorKey: "SHIPPING_QUANTITY",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Qty Shipped" />
    ),
  },
  {
    id: "ship set",
    accessorKey: "SHIP_SET_TYPE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ship Set" />
    ),
  },
  {
    id: "arrival set",
    accessorKey: "ARRIVAL_SET_TYPE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Arrival Set" />
    ),
  },
  {
    id: "fulfillment set",
    accessorKey: "FULFILLMENT_METHOD_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fulfillment Set" />
    ),
  },
  {
    id: "shipping method",
    accessorKey: "SHIPPING_METHOD_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Method" />
    ),
  },
  {
    id: "shipping priority",
    accessorKey: "SHIPMENT_PRIORITY_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Priority" />
    ),
  },
  {
    id: "freight terms",
    accessorKey: "FREIGHT_TERMS_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Freight Terms" />
    ),
  },
  {
    id: "shipping instructions",
    accessorKey: "SHIPPING_INSTRUCTIONS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Shipping Instructions" />
    ),
  },
  {
    id: "packing instructions",
    accessorKey: "PACKING_INSTRUCTIONS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Packing Instructions" />
    ),
  },
  {
    id: "service reference type",
    accessorKey: "SERVICE_REFERENCE_TYPE_CODE",
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
    accessorKey: "SERVICE_REFERENCE_LINE_ID",
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
    accessorKey: "SERVICE_BILL_OPTION_CODE",
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
    accessorKey: "SERVICE_REFERENCE_SYSTEM_ID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Ref. System Name" />
    ),
  },
  {
    id: "service start date",
    accessorKey: "SERVICE_START_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Start Date" />
    ),
    cell: ({
      row: {
        original: { SERVICE_START_DATE },
      },
    }) => {
      if (!SERVICE_START_DATE) return "";
      const date = SERVICE_START_DATE.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "service end date",
    accessorKey: "SERVICE_END_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service End Date" />
    ),
    cell: ({
      row: {
        original: { SERVICE_END_DATE },
      },
    }) => {
      if (!SERVICE_END_DATE) return "";
      const date = SERVICE_END_DATE.split(" ")[0];
      return format(date, "dd-MMM-yyyy");
    },
  },
  {
    id: "service duration",
    accessorKey: "SERVICE_DURATION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Duration" />
    ),
  },
  {
    id: "service period",
    accessorKey: "SERVICE_PERIOD",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Period" />
    ),
  },
  {
    id: "service number",
    accessorKey: "SERVICE_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Number" />
    ),
  },
  {
    id: "service txn reason",
    accessorKey: "SERVICE_TXN_REASON_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Txn. Reason" />
    ),
  },
  {
    id: "service txn comments",
    accessorKey: "SERVICE_TXN_COMMENTS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Txn. Comments" />
    ),
  },
  {
    id: "document number",
    accessorKey: "CHECK_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Number" />
    ),
  },
  {
    id: "project number",
    accessorKey: "PROJECT_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Number" />
    ),
  },
  {
    id: "task number",
    accessorKey: "TASK_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task Number" />
    ),
  },
  {
    id: "unit number",
    accessorKey: "END_ITEM_UNIT_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit Number" />
    ),
  },
  {
    id: "customer job",
    accessorKey: "CUSTOMER_JOB",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Job" />
    ),
  },
  {
    id: "production line",
    accessorKey: "CUSTOMER_PRODUCTION_LINE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Production Line" />
    ),
  },
  {
    id: "model serial number",
    accessorKey: "CUST_MODEL_SERIAL_NUMBER",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model Serial Number" />
    ),
  },
  {
    id: "customer dock",
    accessorKey: "CUSTOMER_DOCK_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Dock" />
    ),
  },
  {
    id: "customer production sequence",
    accessorKey: "CUST_PRODUCTION_SEQ_NUM",
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
    accessorKey: "INDUSTRY_CONTEXT",
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
    accessorKey: "RLA_SCHEDULE_TYPE_CODE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rla Schedule" />
    ),
  },
];

export { columns };

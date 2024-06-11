"use client";

import {
  ColumnDef,
  RowSelectionState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableViewOptions } from "./data-table-view-options";
import Searchbar from "@/components/searchbar";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type PaginationState } from "@tanstack/react-table";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { Card } from "./card";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: { data: TData[]; pageCount: number };
}

const initialVisibilityState: VisibilityState = {
  "#": true,
  "invoice number": true,
  "invoice date": true,
  "operating unit": true,
  "customer taxpayer id": false,
  type: false,
  "po number": true,
  "trading partner": true,
  "supplier number": true,
  "supplier site code": true,
  "invoice currency": true,
  "invoice amount": true,
  "tax amount": true,
  "tax control amount": false,
  "withheld amount": false,
  "prepaid amount": false,
  "gl date": false,
  "payment currency": false,
  "payment rate date": false,
  "payment rate type": false,
  "payment rate": false,
  "distribution set": false,
  description: false,
  "credited invoice": false,
  "match action": false,
  project: false,
  task: false,
  "expenditure item date": false,
  "expenditure type": false,
  "expenditure organization": false,
  "rate type": false,
  "exchange date": false,
  "exchange rate": false,
  "terms date": false,
  terms: false,
  "payment method": false,
  "pay group": false,
  "prepayment type": false,
  "settlement date": false,
  "taxation country": false,
  "business category": false,
  "fiscal classification": false,
  "related invoice": false,
  "invoice sub type": false,
  "self assessed tax amount": false,
  "internal sequence number": false,
  "supplier tax invoice number": false,
  "internal recording date": false,
  "supplier tax invoice date": false,
  "supplier tax invoice exchange rate": false,
  "customs location code": false,
  "remit to supplier name": false,
  "remit to supplier site": false,
  "remit to bank account name": false,
  "remit to bank account number": false,
  "release amount net of tax": false,
};

export function DataTable<TData, TValue>({
  columns,
  data: { data, pageCount },
}: DataTableProps<TData, TValue>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { page, limit } = serverSideSearchParams.parse(
    Object.fromEntries(searchParams)
  );
  const { replace } = useRouter();

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: page - 1,
    pageSize: limit,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  useEffect(() => {
    params.set("page", String(pageIndex + 1));
    params.set("limit", String(pageSize));
    replace(`${pathname}?${params}`, {
      scroll: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, pageSize]);

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialVisibilityState);

  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    pageCount: pageCount ?? -1,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: {
      pagination,
      sorting,
      columnVisibility,
      rowSelection,
    },
    manualPagination: true,
    manualFiltering: true,
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-2">
        <div className="grid items-start">
          <Searchbar placeholder="Search ..." />
        </div>
        <div className="grid md:justify-end">
          <DataTableViewOptions table={table} />
        </div>
      </div>
      <Card className="grid p-4 m-2">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      <DataTablePagination table={table} />
    </div>
  );
}

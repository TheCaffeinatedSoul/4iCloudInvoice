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
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: { data: TData[]; pageCount: number };
  initialVisibilityState: VisibilityState;
}

export function DataTable<TData, TValue>({
  title,
  columns,
  data: { data, pageCount },
  initialVisibilityState,
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
      <div className="grid grid-cols-1 md:grid-cols-12 px-2 gap-2">
        <div className="p-2 font-bold">{title}</div>
        <div className="grid col-start-11 md:col-start- col-end-12 items-end">
          <Searchbar placeholder="Search ..." />
        </div>
        <div className="grid col-start-12 md:justify-end">
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

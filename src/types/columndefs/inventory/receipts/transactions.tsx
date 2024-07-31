"use client";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Textarea } from "@/components/ui/textarea";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { z } from "zod";

export const initialVisibilityState: VisibilityState = {};

const columns: ColumnDef<z.infer<any>>[] = [];

export { columns };

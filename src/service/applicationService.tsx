import { z } from "zod";
import axios from "../api/axios";
import { serverSideSearchParams } from "@/schema/serverside-pagination";

const getAllInvoice: any = async ({
  query,
  limit,
  page,
}: z.infer<typeof serverSideSearchParams>) => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/getall?limit=${limit}&page=${page}&query=${query}`,
      {
        method: "GET",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error getting all invoices", error);
    throw error;
  }
};

const getDetailsByInvoiceNumber: any = async (INVOICE_NUMBER: string) => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/getdetails`,
      {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          INVOICE_NUMBER: INVOICE_NUMBER,
        }),
      }
    );
    const response = await data.json();
    return response.data;
  } catch (error) {
    console.log("Error getting details by invoice number", error);
  }
};

export { getAllInvoice, getDetailsByInvoiceNumber };

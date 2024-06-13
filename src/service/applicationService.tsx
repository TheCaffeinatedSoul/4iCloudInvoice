import { z } from "zod";
import axios from "../api/axios";
import { serverSideSearchParams } from "@/schema/serverside-pagination";
import { API_URL } from "@/api/api";
import { searchPayload } from "@/types/types";

const getAllInvoice: any = async ({
  query,
  limit,
  page,
}: z.infer<typeof serverSideSearchParams>) => {
  try {
    const response = await axios.get(
      `${API_URL}/getall?limit=${limit}&page=${page}&query=${query}`
    );
    return response.data;
  } catch (error) {
    console.log("Error getting all invoices", error);
    throw error;
  }
};

const getDetailsByInvoiceNumber: any = async (INVOICE_NUMBER: string) => {
  try {
    const response = await axios.post(`${API_URL}/getdetails`, {
      INVOICE_NUMBER: INVOICE_NUMBER,
    });
    return response.data.data;
  } catch (error) {
    console.log("Error getting details by invoice number", error);
  }
};

const getInvoiceBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `${API_URL}/getsearchedinvoice?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        INVOICE_NUMBER: data.INVOICE_NUMBER,
        SUPPLIER_NUMBER: data.SUPPLIER_NUMBER,
        SUPPLIER_NAME: data.SUPPLIER_NAME,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.log("Error getting invoice by search: ", error);
  }
};

export { getAllInvoice, getDetailsByInvoiceNumber, getInvoiceBySearch };

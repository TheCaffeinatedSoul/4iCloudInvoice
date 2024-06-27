import axios from "@/api/axios";
import { searchPayload } from "@/types/types";

const getChecksDetailsByCheckNumber: any = async (CHECK_ID: string) => {
  try {
    const response = await axios.post(`/payables/checks/getdetails`, {
      CHECK_ID: CHECK_ID,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getting checks details by check number: ", error);
  }
};

const getChecksBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/payables/checks/getsearchedchecks?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        INVOICE_NUMBER: data.INVOICE_NUMBER,
        CHECK_NUMBER: data.CHECK_NUMBER,
        SUPPLIER_NUMBER: data.SUPPLIER_NUMBER,
        SUPPLIER_NAME: data.SUPPLIER_NAME,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting checks by search: ", error);
  }
};

export { getChecksDetailsByCheckNumber, getChecksBySearch };

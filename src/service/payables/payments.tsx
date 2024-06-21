import { API_URL } from "@/api/api";
import axios from "@/api/axios";
import { searchPayload } from "@/types/types";

const getChecksDetailsByCheckNumber: any = async (CHECK_NUMBER: string) => {
  try {
    const response = await axios.post(`${API_URL}/checks/getdetails`, {
      CHECK_NUMBER: CHECK_NUMBER,
    });
    return response.data.data;
  } catch (error) {
    console.log("Error getting checks details by check number: ", error);
  }
};

const getChecksBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `${API_URL}/checks/getsearchedchecks?limit=${limit}&page=${page}`,
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
    console.log("Error getting checks by search: ", error);
  }
};

export { getChecksDetailsByCheckNumber, getChecksBySearch };

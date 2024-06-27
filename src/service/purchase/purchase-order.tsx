import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getPOBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/purchase/purchaseorder/getpobysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        PO_NUMBER: data.PO_NUMBER,
        BUYER: data.BUYER,
        APPROVAL_STATUS: data.APPROVAL_STATUS,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting PO by search: ", error);
    throw error;
  }
};

const getDetailsByPONumber = async (PO_HEADER_ID: string) => {
  try {
    const response = await axios.post("/purchase/purchaseorder/getdetails", {
      PO_HEADER_ID: PO_HEADER_ID,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getting details by po number: ", error);
    throw error;
  }
};

const getLineDetails = async (PO_HEADER_ID: string, LINE_NUMBER: string) => {
  try {
    const response = await axios.post(
      "/purchase/purchaseorder/getlinedetails",
      {
        PO_HEADER_ID: PO_HEADER_ID,
        LINE_NUMBER: LINE_NUMBER,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting line details: ", error);
    throw error;
  }
};

export { getPOBySearch, getDetailsByPONumber, getLineDetails };

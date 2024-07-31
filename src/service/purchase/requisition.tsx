import axios from "@/api/axios";
import { searchPayload } from "@/types/types";

const getRequisitionBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/purchase/requisition/getrequisitionbysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        REQUISITION_NUMBER: data.REQUISITION_NUMBER,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
        PREPARER: data.PREPARER,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting requisition by search: ", error);
  }
};

const getDetailsByRequisitionNumber = async (REQUISITION_ID: string) => {
  try {
    const response = await axios.post("/purchase/requisition/getdetails", {
      REQUISITION_ID: REQUISITION_ID,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getting details by requisition number: ", error);
    throw error;
  }
};

const getLineDetails = async (REQUISITION_ID: string, LINE_NUMBER: number) => {
  try {
    const response = await axios.post("/purchase/requisition/getlinedetails", {
      REQUISITION_ID: REQUISITION_ID,
      LINE_NUMBER: LINE_NUMBER,
    });
    return response.data;
  } catch (error) {
    console.error("Error getting line details: ", error);
    throw error;
  }
};

export {
  getRequisitionBySearch,
  getDetailsByRequisitionNumber,
  getLineDetails,
};

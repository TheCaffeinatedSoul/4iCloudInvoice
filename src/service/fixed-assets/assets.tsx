import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getAssetsBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/fixedassets/assets/getassetsbysearch?limit=${limit}&page=${page}`,
      {
        ORGANIZATION: data.ORGANIZATION,
        ASSET_NUMBER: data.ASSET_NUMBER,
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting assets by search: ", error);
    throw error;
  }
};

const getAssetDetailsByAssetId: any = async (ASSET_ID: string) => {
  try {
    const response = await axios.post(
      `/fixedassets/assets/getassetdetailsbyassetid`,
      {
        ASSET_ID: ASSET_ID,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error getting asset details by asset id: ", error);
  }
};

const getDepreciationDetails = async (
  ASSET_ID: string,
  TRANSACTION_HEADER_ID: string,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/fixedassets/assets/getdepreciationdetails?limit=${limit}&page=${page}`,
      {
        ASSET_ID: ASSET_ID,
        TRANSACTION_HEADER_ID: TRANSACTION_HEADER_ID,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error getting depreciation details: ", error);
    throw error;
  }
};

export { getAssetsBySearch, getAssetDetailsByAssetId, getDepreciationDetails };

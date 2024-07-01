import { searchPayload } from "@/types/types";
import axios from "@/api/axios";

const getJournalsBySearch: any = async (
  data: searchPayload,
  limit: number,
  page: number
) => {
  try {
    const response = await axios.post(
      `/generalledger/journals/getjournalsbysearch?limit=${limit}&page=${page}`,
      {
        FROM_DATE: data.FROM_DATE,
        TO_DATE: data.TO_DATE,
      }
    );
    return response;
  } catch (error) {
    console.error("Error getting journals by search: ", error);
  }
};

export { getJournalsBySearch };

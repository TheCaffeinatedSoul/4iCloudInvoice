import axios from "@/api/axios";
import { cookies } from "next/headers";

export const signIn = async (formData: FormData) => {
  const cookieStore = cookies();

  const response = await axios.post(`/login/userlogin`, {
    USERNAME: formData.get("USERNAME"),
    PASSWORD: formData.get("PASSWORD"),
  });
  if (response.data) {
    cookieStore.set("NAME", response.data.data[0].user_name);
    cookieStore.set("DESCRIPTION", response.data.data[0].description);
    cookieStore.set("ACCESS", response.data.data[0].access_level);
    return response.data;
  }
};

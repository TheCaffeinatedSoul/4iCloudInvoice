"use server";

import { signIn } from "@/service/login/login";
import { redirect } from "next/navigation";

export const authenticate: any = async (
  _currentState: unknown,
  formData: FormData
) => {
  try {
    const response = await signIn(formData);
    if (response.data.length !== 0) {
      redirect("/home");
    }
  } catch (error: any) {
    if (error && error.response) {
      return error.response.data.message;
    } else {
      throw error;
    }
  }
};

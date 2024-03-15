import { FormValues } from "@/types/formTypes";
import customAxios from "@/utils/customAxios";

const login = async (formData: FormValues) => {
  try {
    const response = await customAxios.post("/auth/login", formData);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject("No response from server");
    } else {
      const unknownError = error as Error;
      return Promise.reject(unknownError.message);
    }
  }
};

export { login };

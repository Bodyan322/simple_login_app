import axios from "axios";
import { getFromSecureStore } from "./secureStorage";

export const getUser = async () => {
  const token = await getFromSecureStore('userToken');
  try {
    const response = await axios.get('https://dummyjson.com/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    if(axios.isAxiosError(error)) {
      const errorMessage = error?.response?.data.message;
      throw { message: errorMessage };
    } else {
      throw error;
    }
  }
};

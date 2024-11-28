import axios from 'axios';

export type LoginError = {
  message: string;
}

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
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

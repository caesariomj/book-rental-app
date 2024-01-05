import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axiosInstance";

export const useAuthRegister = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await axiosInstance.post("auth/register", body);

      return response;
    },
    onSuccess,
    onError,
  });
};

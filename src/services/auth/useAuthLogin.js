import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axiosInstance";

export const useAuthLogin = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await axiosInstance.post("auth/login", body);

      return response;
    },
    onSuccess,
    onError,
  });
};

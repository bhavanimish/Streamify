import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true, // send cookies
  headers: {
    "Content-Type": "application/json", // ✅ MAKE SURE JSON IS SENT
  },
});

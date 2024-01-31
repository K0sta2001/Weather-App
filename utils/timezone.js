import { useQuery } from "react-query";

const fetchTimezoneData = async () => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Tbilisi"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const useTimezoneData = () => {
  return useQuery("hoursTbilisi", fetchTimezoneData, { staleTime: 60000 * 10 });
};

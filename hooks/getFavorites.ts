import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const getFavorites = () => {
  const { data, isLoading, error, mutate } = useSWR(
    "/api/favorite-movies",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default getFavorites;

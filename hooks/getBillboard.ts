import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const getBillboard = () => {
  const { data, isLoading, error } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default getBillboard;

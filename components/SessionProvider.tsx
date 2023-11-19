"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function SessionProvider({ children }: Props) {
  const router = useRouter();

  const { data, isLoading } = useCurrentUser();
  if (!data && !isLoading) router.push("/auth");
  return <>{children}</>;
}

"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function SessionProvider({ children }: Props) {
  const router = useRouter();
  const path = usePathname();
  const { data, isLoading } = useCurrentUser();
  if (path === "/auth") return <>{children}</>;
  if (!data && !isLoading) router.push("/auth");
  return <>{children}</>;
}

"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function SessionProvider({ children }: Props) {
  const router = useRouter();
  const path = usePathname();
  const { data } = useCurrentUser();
  useEffect(() => {
    if (data) return;
    router.push("/auth");
  }, [data]);
  if (path === "/auth") return <>{children}</>;
  return <>{children}</>;
}

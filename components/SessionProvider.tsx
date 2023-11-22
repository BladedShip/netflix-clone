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
    if (data) {
      router.push("/");
    } else if (path !== "/auth" && !data) {
      router.push("/auth");
    }
  }, [data]);

  return <>{children}</>;
}

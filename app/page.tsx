"use client";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

type Props = {};
const Home = (props: Props) => {
  const { data, isLoading } = useCurrentUser();
  if (!data && !isLoading) window.location.href = "/auth";
  return (
    <main className="text-white">
      <h1>Home</h1>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </main>
  );
};

export default Home;

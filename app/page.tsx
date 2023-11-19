"use client";
import { signOut } from "next-auth/react";

type Props = {};
const Home = (props: Props) => {
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

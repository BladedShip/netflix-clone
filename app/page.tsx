"use client";

import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </main>
  );
};

export default Home;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

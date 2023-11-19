"use client";

// Package Imports
import { useState } from "react";
import Image from "next/image";

// Component Imports
import Input from "./_components/Input";

type Props = {};

enum AuthDisplayState {
  SIGNUP,
  LOGIN,
}

const AuthScreen = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [authState, setAuthState] = useState<AuthDisplayState>(
    AuthDisplayState.LOGIN
  );

  const toggleAuthState = () => {
    setAuthState(
      authState === AuthDisplayState.LOGIN
        ? AuthDisplayState.SIGNUP
        : AuthDisplayState.LOGIN
    );
  };

  return (
    <main className="relative h-full w-full bg-[url('/assets/banner.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5" id="auth-navbar">
          <Image
            src="/assets/logo.png"
            alt="Netflix Logo"
            width={120}
            height={50}
          />
        </nav>
        <section className="justify-center flex" id="auth-container">
          <div className="bg-black bg-opacity-80 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl font-semibold mb-10">
              {authState === AuthDisplayState.LOGIN ? "Log In" : "Sign Up"}
            </h2>
            <div className="flex flex-col gap-4">
              {authState === AuthDisplayState.SIGNUP && (
                <Input
                  label="Username"
                  id="name"
                  type="text"
                  value={username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUsername(e.target.value);
                  }}
                />
              )}

              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition cursor-pointer">
              {authState === AuthDisplayState.LOGIN ? "Log In" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {authState === AuthDisplayState.LOGIN
                ? "First time bub?"
                : "Returning from your break?"}{" "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={toggleAuthState}
              >
                {authState === AuthDisplayState.LOGIN
                  ? "Create an Account"
                  : "Log In"}
              </span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthScreen;

// Possible Improvements: Switch from using states to a form along with server actions, making this fully Server Side Rendered

// const LoginWithServerActions = (props: Props) => {
//   const submitCredentials = (e: React.FormEvent<HTMLFormElement>) => {
//     "use server";
//     e.preventDefault();
//     const username = e.currentTarget.username.value;
//     const password = e.currentTarget.password.value;
//     // Some server side validation function
//   };
//   return (
//     <form onSubmit={submitCredentials}>
//       <input type="text" placeholder="username" />
//       <input type="password" placeholder="password" />
//       <button type="submit">Log In</button>
//     </form>
//   );
// };

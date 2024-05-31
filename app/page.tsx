'use client'
import React from "react";
import { signIn, useSession } from "next-auth/react";
import Dashboard from "./components/Dashboard";

const Home = () => {
  const { data: session } = useSession();

  console.log("data", session);
  return (
    <div>
      {session?.user ? (
        <div className="p-4 md:p-10 flex flex-col md:flex-row justify-center gap-3 w-screen h-screen text-black overflow-hidden">
          <Dashboard user={session.user} />
        </div>
      ) : (
        <div className="flex flex-col p-10 h-screen">
          <h1 className="text-3xl ">Not Signed In</h1>
          <button className="border-2 w-fit p-4 rounded-sm " onClick={() => signIn()}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

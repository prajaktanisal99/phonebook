'use client'
import React from "react";
import { signIn, useSession } from "next-auth/react";
import Dashboard from "./components/Dashboard";
import { UserSchema } from "@/types/types";

const Home = () => {

  const user: UserSchema = { name: "John Doe", email: "johndoe@gmail.com"}
  return (
    <div>

        <div className="p-4 md:p-10 flex flex-col md:flex-row justify-center gap-3 w-screen h-screen text-black overflow-hidden">
          <Dashboard user={user} />
        </div>
    </div>
  );
};

export default Home;

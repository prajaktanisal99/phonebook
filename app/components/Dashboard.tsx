import { UserSchema } from "@/types/types";
import React from "react";
import AddressBook from "./AddressBook";
import Profile from "./Profile";

const Dashboard = ({ user }: { user: UserSchema }) => {
  return (
    <div className="flex flex-col items-center md:items-start w-full overflow-auto">
      <div className="flex flex-col md:flex-row w-full">
        {/* profile */}
        <div className="w-full md:w-2/6 p-4">
          <Profile user={user} />
        </div>
        {/* address book */}
        <div className="w-full md:w-4/6 p-4">
          <AddressBook />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;


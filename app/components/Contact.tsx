import { ContactSchema } from "@/types/types";
import React from "react";

const Contact = ({ selectedContact }: { selectedContact: ContactSchema }) => {
  return (
    <div className="flex w-fit flex-col items-center md:gap-4 gap-2">
      <div className="text-white rounded-lg p-4 md:p-10 gap-4 md:gap-10">
          <div className="w-28 h-28 md:w-60 md:h-60 border-2 rounded-full"></div>
      </div>
      <div className="gap-4 flex flex-col items-center">
        <div>{selectedContact?.name}</div>
        <div>{selectedContact?.email}</div>
        <div>{selectedContact?.phone}</div>
      </div>
    </div>
  );
};

export default Contact;

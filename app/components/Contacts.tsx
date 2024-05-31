import { ContactSchema } from "@/types/types";
import React from "react";

const Contacts = ({
  contacts,
  setSelectedContact,
}: {
  contacts: ContactSchema[];
  setSelectedContact: (selectedContact: ContactSchema) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 pl-4 pr-4 border-r-2">
      {/* search */}
      <div className="bg-slate-300">
        <input className="w-full" type="text" placeholder="search by name"></input>
      </div>
      {/* contacts */}
      <div className="w-full gap-4 flex flex-col overflow-y-auto">
        {contacts.map((contact: ContactSchema) => 
          <div key={contact.id} className="rounded-lg justify-between gap-4 p-2 flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row justify-between">
              {contact.name}

              {/* on hover: tooltip copy contact, on click: desktop: copy contact, mobile: send message */}
              {contact.phone} 

              {/* on hover: tooltip send email, onclick: pop up for email */}
              {contact.email}
              </div>
              <button onClick={() => setSelectedContact(contact)}>Info</button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Contacts;

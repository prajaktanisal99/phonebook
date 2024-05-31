import React, { useState } from "react";
import Contacts from "./Contacts";
import Contact from "./Contact";
import { ContactSchema } from "@/types/types";

const ContactsPanel = ({ contacts }: { contacts: ContactSchema[] }) => {
  const [selectedContact, setSelectedContact] = useState<ContactSchema>(
    contacts[0]
  );

  return (
    <div className="flex text-white justify-evenly rounded-lg flex-col md:flex-row p-2">
      {/* search and list */}
      <Contacts contacts={contacts} setSelectedContact={setSelectedContact} />
      {/* contact details */}
      <Contact selectedContact={selectedContact} />
    </div>
  );
};

export default ContactsPanel;

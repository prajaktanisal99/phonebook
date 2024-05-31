import React, { useEffect, useState } from 'react'
import AddressBookHeading from './AddressBookHeading'
import { ContactSchema } from '@/types/types';
import ContactsPanel from './ContactsPanel';

const AddressBook =  () => {

  const [contacts, setContacts] = useState<ContactSchema[]>([]);

  useEffect(() => {
    console.log("Hello World")
    fetchUsers().then((res) => setContacts(res));
  })

  console.log("address book")

  return (
    <div className="flex flex-col justify-between gap-4 p-2">
          {/* address book - heading */}
          <AddressBookHeading />

          {/* contacts panel */}
          <ContactsPanel contacts={contacts}/>
        </div>
  )
}


const fetchUsers = async () : Promise<ContactSchema[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {cache: "no-store"});
  const contacts = await response.json();
  return contacts;
}
export default AddressBook

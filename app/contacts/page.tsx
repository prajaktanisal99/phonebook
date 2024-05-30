import React from 'react'

interface ContactSchema {
  id: number,
  name: string,
  username: string,
  address: AddressSchema,
  phone: string,
  website: string,
}

interface AddressSchema {
  street: string,
  suite: string,
  city: string,
  zipCode: string,
  geo: {
    lat: string,
    lng: string
  }
}

const Contacts = (contacts: ContactSchema[]) => {
  return (
    <div>
      <h1>Contacts</h1>
    </div>
  )
}

export default Contacts

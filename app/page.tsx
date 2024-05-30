import React from 'react'
import User from './user/page'
import Contacts from './contacts/page'

const Home = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'});
  const contacts = await response.json();

  console.log(contacts)
  return (
    <div className='p-10'>
      <h1 className='flex flex-row justify-center text-4xl pb-10'>Contacts Application</h1>
      <div className='display flex flex-row justify-evenly h-screen border-spacing-0'>
        <User />
        <Contacts contacts= {contacts} />
      </div>
    </div>
  )
}

export default Home

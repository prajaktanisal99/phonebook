import { UserSchema } from '@/types/types'
import { signOut } from 'next-auth/react';
import React from 'react'

const Profile = ({user}: {user: UserSchema}) => {

  const categoryStyle = "p-2 rounded-xl bg-slate-400 text-center flex-1 min-w-[120px]";

  return (
    <div className="text-white rounded-lg p-4 md:p-10 flex flex-col items-center gap-4 md:gap-10">
    <div className="flex justify-center p-4">
      <div className="w-48 h-48 md:w-64 md:h-64 border-2 rounded-full"></div>
    </div>
    <h1 className="text-white text-xl md:text-2xl px-2 py-1">{user?.name}</h1>
    <button className='border-2 rounded-lg p-2' onClick={() => signOut()} >Sign Out</button>
    <div className="flex flex-row justify-center gap-4 flex-wrap w-full overflow-y-auto">
      <div className={categoryStyle}>Fav</div>
      <div className={categoryStyle}>Family</div>
      <div className={categoryStyle}>Work</div>
      <div className={categoryStyle}>Friends</div>
      <div className={categoryStyle}>Friends</div>
      <div className={categoryStyle}>Friends</div>
      <div className={categoryStyle}>Friends</div>
    </div>
  </div>
  )
}

export default Profile

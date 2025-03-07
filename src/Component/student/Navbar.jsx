import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { UseGlobalContext } from '../../Context';

const Navbar = () => {
  const {
    navigate,
    isEducator,
    setIsEducator,
  } = UseGlobalContext()
  const isCourslistPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 ${isCourslistPage ? "bg-white" : "bg-cyan-100/70"} py-3`}>
      <img src={assets.logo} onClick={() => navigate("/")} alt="logo" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          {
            user && <>
            <button onClick={()=>navigate("/educator")}>{isEducator ? "Educator Dashboard" : "Become Educator"}</button>
              |<Link to="/my-enrollment">My Enrollment</Link>
            </>
          }
        </div>
        {
          user ? <UserButton /> :
            <button className='bg-blue-600 text-white px-5 py-2 rounded-full' onClick={() => openSignIn()}>Create account</button>
        }
      </div>
      {/*For Mobile View */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        {
          user && <>
            <button onClick={()=>navigate("/educator")}>{isEducator ? "E Dashboard" : "Become Educator"}</button>
            |<Link to="/my-enrollment">My Enrollment</Link>
          </>
        }
        {
          user ? <UserButton /> :
            <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="img" /></button>
        }
      </div>
    </div>
  )
}

export default Navbar

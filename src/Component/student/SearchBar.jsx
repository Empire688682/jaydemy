import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const  [input, setIbput] = useState(data? data:"");

  const onSearchHandler = (e) =>{
    e.preventDefault();
    navigate("/courses-list/"+ input);
  }
  return (
      <form onSubmit={onSearchHandler} className='flex max-w-xl w-full md:h-14 h-12 items-center bg-white border rounded border-gray-500/20'>
        <img src={assets.search_icon} alt="search_icon" className='md:w-auto w-10 px-3' />
        <input type="text" onChange={(e)=>setIbput(e.target.value)} value={input} placeholder='Search for curses' className='w-full h-full outline-none text-gray-500/80' />
        <button type='submit' className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button>
      </form>
  )
}

export default SearchBar

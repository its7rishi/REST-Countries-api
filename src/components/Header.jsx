import React from 'react'
import { BsMoon } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'

function Header({ darkMode, darkModeToggle }) {
  function refreshPage() {
    document.location.reload()
  }
  return (
    <div className='flex items-center justify-between px-4 md:px-12 py-4 bg-white shadow-md dark:bg-darkModeDarkBlue dark:text-white'>
      <p
        className='text-sm md:text-xl font-bold cursor-pointer'
        onClick={refreshPage}>
        Where in the world?
      </p>
      <button
        className='p-2 flex space-x-4 items-center text-sm md:text-lg'
        onClick={darkModeToggle}>
        {darkMode ? <BsFillMoonFill /> : <BsMoon />}
        &nbsp; Dark Mode
      </button>
    </div>
  )
}

export default Header

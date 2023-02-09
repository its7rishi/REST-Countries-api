import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'

function Search({ searchTerm, setSearchTerm, handleInputSubmit, setRegion }) {
  const [filterRegion, setFilterRegion] = useState('Filter By Region')
  const [filterOn, setFilterOn] = useState(false)
  // const [searchText, setSearchText] = useState('')

  function updateFilterRegion(e) {
    setFilterRegion((prev) => (prev = e.target.innerText))
    setRegion(e.target.innerText)
    setFilterOn(false)
  }
  return (
    <form
      onSubmit={(e) => handleInputSubmit(e)}
      id='searchForm'
      className='w-10/12 mx-auto flex flex-col space-y-6 md:space-y-0 md:flex-row items-start justify-start md:items-center md:justify-between mt-6 p-2 dark:bg-darkModeVeryDarkBlue'>
      <div className='w-full flex items-center justify-start space-x-4 bg-white dark:bg-darkModeDarkBlue dark:text-white p-2 rounded'>
        <BsSearch />
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search for a country...'
          className='bg-white text-gray-500 dark:bg-darkModeDarkBlue focus:outline-none text-sm w-10/12 p-1'
        />
      </div>

      {/* Dropdown  */}
      <div className='relative mt-6 w-7/12 md:w-1/4 dark:text-white bg-white dark:bg-darkModeDarkBlue p-3 rounded'>
        <div
          className='flex items-center justify-between'
          onClick={() => setFilterOn((prev) => !prev)}>
          <p className='text-sm'>{filterRegion}</p>
          <span>
            <BiChevronDown />
          </span>
        </div>
        {filterOn && (
          <ul className='absolute z-10 -bottom-52 left-0  md:right-0 rounded text-sm bg-white py-3 pl-3 pr-8 dark:text-white dark:bg-darkModeDarkBlue transition-all duration-500'>
            <li
              className='mt-2 py-1 cursor-pointer'
              onClick={(e) => updateFilterRegion(e)}>
              Africa
            </li>
            <li
              className='mt-2 py-1 cursor-pointer'
              onClick={(e) => updateFilterRegion(e)}>
              Americas
            </li>
            <li
              className='mt-2 py-1 cursor-pointer'
              onClick={(e) => updateFilterRegion(e)}>
              Asia
            </li>
            <li
              className='mt-2 py-1 cursor-pointer'
              onClick={(e) => updateFilterRegion(e)}>
              Europe
            </li>
            <li
              className='mt-2 py-1 cursor-pointer'
              onClick={(e) => updateFilterRegion(e)}>
              Oceania
            </li>
          </ul>
        )}
      </div>
    </form>
  )
}

export default Search

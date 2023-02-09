import React, { useState } from 'react'
import Details from './Details'
import ListItem from './ListItem'

function CountryList({ list, queryText, region }) {
  const [selectedCountry, setSelectedCountry] = useState('')

  let searchForm = document.getElementById('searchForm')

  let filteredList
  if (queryText) {
    filteredList = list.filter(
      (item) => item.name.common.toLowerCase() === queryText.toLowerCase()
    )
  } else if (region !== '') {
    filteredList = list.filter((item) => item.region === region)
  } else {
    filteredList = list
  }

  function handleSelectedCountry(item) {
    setSelectedCountry(item)
    searchForm.classList.add('hidden')
  }

  return (
    <div className='relative w-full md:w-10/12 mt-6 px-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-lightModeVeryLightGray dark:bg-darkModeVeryDarkBlue justify-items-center'>
      {filteredList.map((item, idx) => {
        return (
          <ListItem item={item} key={idx} handleClick={handleSelectedCountry} />
        )
      })}
      {selectedCountry && (
        <Details
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          list={list}
        />
      )}
    </div>
  )
}

export default CountryList

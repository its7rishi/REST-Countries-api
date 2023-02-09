import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

function Details({ selectedCountry, setSelectedCountry, list }) {
  // Convert numbers to comma separated strings
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  let searchForm = document.getElementById('searchForm')

  function handleBackClick() {
    setSelectedCountry('')
    searchForm.classList.remove('hidden')
  }

  // Native names to comma separated string
  let namesArray = []
  let nativenames = ''

  for (let item in selectedCountry.name.nativeName) {
    namesArray.push(selectedCountry.name.nativeName[item].common)
  }

  namesArray.sort()

  nativenames = namesArray.join(', ')

  //Currencies to comma separated string

  let currenciesArray = []
  let currency = ''

  for (let item in selectedCountry.currencies) {
    currenciesArray.push(selectedCountry.currencies[item].name)
  }

  currenciesArray.sort()

  currency = currenciesArray.join(', ')

  // Languages to comma separated string

  let langArray = []
  let languages = ''

  for (let item in selectedCountry.languages) {
    langArray.push(selectedCountry.languages[item])
  }

  langArray.sort()

  languages = langArray.join(', ')

  //List of bordering countries

  // LOOK FOR alpha3Code

  let borderCodes = []
  let borderCountries = []

  for (let item in selectedCountry.borders) {
    borderCodes.push(selectedCountry.borders[item])
  }

  borderCodes.forEach((elem) => {
    list.forEach((country) => {
      if (country.cca3 === elem) {
        borderCountries.push(country.name.common)
      }
    })
  })

  borderCountries.sort()

  return (
    <div className='absolute z-30 w-screen h-full flex flex-col justify-start items-center bg-white dark:bg-darkModeVeryDarkBlue'>
      <div className='w-full h-full bg-transparent'>
        <button
          className='p-2 px-3 md:mt-4 ml-8 md:ml-24 shadow-md text-sm dark:text-white flex items-center justify-center space-x-2 bg-white dark:bg-darkModeDarkBlue rounded'
          onClick={handleBackClick}>
          <BsArrowLeft />
          <span>Back</span>
        </button>

        {/* Details Div */}

        <div className='mt-12 w-10/12 mx-auto bg-white dark:bg-darkModeVeryDarkBlue flex flex-col md:flex-row  md:space-x-24 items-start justify-center'>
          <img
            src={selectedCountry.flags.png}
            alt='country flag'
            className='md:h-80'
          />
          <div className='relative md:w-8/12 flex flex-col md:flex-row items-start md:items-center md:space-x-20 w-full '>
            {/* Div 1 */}
            <div className='text-sm mt-8 md:mt-0 dark:text-white md:w-1/2'>
              <h1 className='text-2xl tracking-tighter  mb-6 text-left w-full'>
                {selectedCountry.name.common}
              </h1>
              <div className='flex flex-col space-y-3 items-start'>
                <p>
                  Native Name:
                  <span className='text-gray-400 ml-2'>{nativenames}</span>
                </p>
                <p>
                  Population:
                  <span className='text-gray-400 ml-2'>
                    {numberWithCommas(selectedCountry.population)}
                  </span>
                </p>
                <p>
                  Region:
                  <span className='text-gray-400 ml-2'>
                    {selectedCountry.region}
                  </span>
                </p>
                <p>
                  Sub Region:
                  <span className='text-gray-400 ml-2'>
                    {selectedCountry.subregion}
                  </span>
                </p>
                <p>
                  Capital:
                  <span className='text-gray-400 ml-2'>
                    {selectedCountry.capital}
                  </span>
                </p>
              </div>
            </div>
            {/* Div 2 */}
            <div className='text-sm mt-8 md:mt-0 dark:text-white flex flex-col space-y-3 w-full md:justify-start md:w-1/2'>
              <p>
                Top Level Domain:
                <span className='text-gray-400 ml-2 text-left'>
                  {selectedCountry.tld}
                </span>
              </p>
              <p>
                Currencies:
                <span className='text-gray-400 ml-2'>{currency}</span>
              </p>
              <p>
                Languages:
                <span className='text-gray-400 ml-2'>{languages}</span>
              </p>
            </div>

            {/* Border Countries */}
            <div className='absolute w-full -bottom-28 md:-bottom-16 md:-left-20 bg-white dark:bg-darkModeVeryDarkBlue dark:text-white flex flex-col md:flex-row justify-start items-start space-y-2 md:space-y-0'>
              <p className='text-sm tracking-tight'>Border Countries:</p>
              <div className='flex justify-start items-start space-x-1 space-y-1 flex-wrap md:ml-2'>
                {borderCountries.map((country, idx) => (
                  <span
                    key={idx}
                    className='text-xs py-1 px-2 rounded bg-white dark:bg-darkModeDarkBlue border  dark:border-none tracking-tight'>
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details

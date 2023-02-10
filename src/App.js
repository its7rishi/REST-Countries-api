import { useState, useEffect } from 'react'
import CountryList from './components/CountryList'
import Header from './components/Header'
import Search from './components/Search'
import FadeLoader from 'react-spinners/FadeLoader'
import Footer from './components/Footer'

let initialMode = localStorage.getItem('darkMode')

function App() {
  const [darkMode, setDarkMode] = useState(initialMode || false)
  const [searchTerm, setSearchTerm] = useState('')
  const [queryText, setQueryText] = useState('')
  const [countryList, setCountryList] = useState([])
  const [region, setRegion] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const darkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', JSON.stringify(true))
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', JSON.stringify(false))
    }
  }, [darkMode])

  const handleInputSubmit = (e) => {
    e.preventDefault()
    setQueryText(searchTerm)
    setSearchTerm('')
  }

  async function fetchAllData() {
    let mydata
    await fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        mydata = data
        setCountryList(mydata)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    <div className='w-screen h-screen bg-lightModeVeryLightGray dark:bg-darkModeVeryDarkBlue overflow-x-hidden'>
      <Header darkMode={darkMode} darkModeToggle={darkModeToggle} />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleInputSubmit={handleInputSubmit}
        setRegion={setRegion}
      />
      {isLoading && (
        <div className='w-full h-full flex items-start justify-center md:items-center pt-10 md:pt-0'>
          <FadeLoader
            loading={isLoading}
            color={`${darkMode ? '#fff' : 'hsl(207, 26%, 17%)'}`}
          />
        </div>
      )}
      {!isLoading && (
        <CountryList list={countryList} queryText={queryText} region={region} />
      )}
      <Footer />
    </div>
  )
}

export default App

import React from 'react'

function ListItem({ item, handleClick }) {
  // Convert numbers to comma separated strings
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div
      className='w-full md:w-50 h-80 bg-white dark:bg-darkModeDarkBlue dark:text-white  rounded-lg overflow-hidden flex flex-col justify-start items-start cursor-pointer'
      onClick={() => handleClick(item)}>
      <img
        src={item.flags.png}
        alt={item.name.common}
        className='h-40 w-full'
      />
      <div className='flex flex-col items-start mt-4 px-3 pb-3'>
        <p className='font-semibold mb-4'>{item.name.common}</p>
        <p className='text-sm mb-2'>
          Population:&nbsp;
          <span className='text-gray-400 text-xs'>
            {numberWithCommas(item.population)}
          </span>
        </p>
        <p className='text-sm mb-2'>
          Region:&nbsp;
          <span className='text-gray-400 text-xs'>{item.region}</span>
        </p>
        <p className='text-sm'>
          Capital:&nbsp;{' '}
          <span className='text-gray-400 text-xs'>{item.capital}</span>
        </p>
      </div>
    </div>
  )
}

export default ListItem

import React from 'react'

export default function Footer() {
  return (
    <div className='fixed bottom-0 left-0 w-full p-5 bg-white dark:bg-darkModeVeryDarkBlue dark:text-white text-sm'>
      <p className='text-center'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io' className='text-blue-500'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://github.com/its7rishi' className='text-red-500'>
          Saptarshi Majumdar
        </a>{' '}
        &copy;
      </p>
    </div>
  )
}

import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex justify-center items-center py-2 px-4'>
        <div className='flex flex-wrap gap-8'>
            <a className='text-sm hover:underline hover:text-blue-600 hover:cursor-pointer'>
                Github
            </a>
            <a className='text-sm hover:underline hover:text-blue-600 hover:cursor-pointer'>
                Fund
            </a>
            <p className='text-sm'>
                All rights reserved @IndicTools 2025-2026
            </p>
        </div>
    </footer>
  )
}

export default Footer
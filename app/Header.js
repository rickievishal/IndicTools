import React from 'react'

const Header = () => {
  return (
            <nav className='sticky top-0 w-full max-w-5xl py-2 border-1 flex justify-between mx-auto mt-2 px-4 rounded-lg bg-black backdrop-blur-2xl'>
                <div>
                    IndicTools
                </div>
                <ol className='flex gap-4'>
                    <li>
                        about
                    </li>
                    <li>
                        misson
                    </li>
                    <li>
                        contribute
                    </li>
                </ol>
            </nav>
  )
}

export default Header
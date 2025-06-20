import React from 'react'

const Button = ({children,className="",onClick}) => {

  return (
    <button onClick={onClick} className={`inline-flex items-center gap-2 px-4 py-1 pb-1.5 border rounded-lg text-[var(--background)] bg-[var(--foreground)] hover:bg-gray-100 hover:cursor-pointer shadow-lg ${className}`}>
        {children}
    </button>
  )
}

export default Button
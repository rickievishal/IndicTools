import Image from 'next/image'
import React from 'react'

const ContributersIcon = ({href ="https://github.com/imradhe",src = "https://avatars.githubusercontent.com/u/65386038?v=4"}) => {
  return (
    <a href={href} className='w-[50px] h-[50px] rounded-full overflow-hidden saturate-0 hover:saturate-50'>
        <Image className='w-full h-full object-cover' alt="contributerProfile" src={src}/>
    </a>
  )
}

export default ContributersIcon
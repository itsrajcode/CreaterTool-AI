import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-white shadow-sm border-b-2 flex justify-between items-center'>
        <div className='flex gap-2 border rounded-md items-center max-w-lg'>
            <Search />
            <input type = "text" placeholder="Search..." className='outline-none p-1'/>
        </div>
    </div>
  )
}

export default Header
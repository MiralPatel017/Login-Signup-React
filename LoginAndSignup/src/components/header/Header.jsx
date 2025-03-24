import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container bg-gray-700 text-white text-[20px]'>
            <div className='flex py-[10px] justify-between'>
                <div className=' font-semibold'>
                    Header
                </div>
                <div className='flex gap-5'>
                    <Link to='/Login'>
                        Login
                    </Link>
                    <Link to='/Signup'>
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';

export default function NavBar() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between items-center text-white py-8'>
                <div className='flex flex-row gap-x-14 font-medium text-sm'>
                    <a href='/'>LINK 01</a>
                    <a href='/'>LINK 02</a>
                    <a href='/'>LINK 03</a>
                    <a href='/'>LINK 04</a>
                </div>
                <text className='text-4xl font-bold'>LOGO</text>
                <div className='flex flex-row gap-x-6'>
                    <SearchOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <PermIdentitySharpIcon/>
                </div>
            </div>
        </div>
    )
}

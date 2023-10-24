import React from 'react'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

export default function Contact() {
    return (
        <div className='flex flex-col bg-yellow mx-32 mt-20 px-28 py-14'>
            <text className='font-bold text-3xl mb-6 self-center'>CONTACT WITH US</text>
            <div className='flex flex-row justify-between mb-5'>
                <input
                    className='px-5 py-1 border border-darkGrey bg-transparent placeholder:text-darkGrey'
                    placeholder='Name'
                    type='text'
                    style={{width:510}}
                />
                <input
                    className='px-5 py-1 border border-darkGrey bg-transparent placeholder:text-darkGrey'
                    placeholder='Email Address'
                    type='email'
                    style={{width:510}}
                />
            </div>
            <textarea
                className='px-5 py-1 h-40 border mb-5 border-darkGrey bg-transparent placeholder:text-darkGrey'
                placeholder='Your Message'
            />
            <div className='flex flex-row justify-between items-center'>
                <a href='/' className='italic font-semibold text-sm'>
                    <AttachFileOutlinedIcon fontSize='small' className='rotate-45'/> ATTACH IMAGES
                </a>
                <button className='italic font-semibold text-sm text-white bg-black py-2 px-10'>
                    SEND MESSAGE
                </button>
            </div>
        </div>
    )
}

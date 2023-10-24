import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <div className='flex flex-col mx-32 mt-16 mb-10'>
            <div className='flex flex-row justify-between items-center'>
                <text className='text-4xl font-bold'>LOGO</text>
                <div className='flex flex-row gap-x-8 font-medium text-sm'>
                    <text>LINK 1</text>
                    <text>LINK 2</text>
                    <text>LINK 3</text>
                    <text>LINK 4</text>
                    <text>LINK 5</text>
                    <text>LINK 6</text>
                    <text>LINK 7</text>
                    <text>LINK 8</text>
                </div>
                <div className='flex flex-row gap-x-3'>
                    <FacebookOutlinedIcon/>
                    <FacebookOutlinedIcon/>
                    <FacebookOutlinedIcon/>
                    <FacebookOutlinedIcon/>
                    {/* <FontAwesomeIcon icon='instagram'/>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i> */}
                </div>
            </div>
            <hr className='border-t-1 border-grey my-4'/>
            <div className='flex flex-row justify-between items-center'>
                <text className=''>
                    Copyright © 2023, testdocument<br/>Designed & Developed by Infragist
                </text>
                <div className='flex flex-row gap-x-8 font-medium text-sm'>
                    <text>Shipping</text>
                    <text>Returns</text>
                    <text>FAQs</text>
                    <text>Guarantee</text>
                    <text>Contact Us</text>
                    <text>Policy & Terms</text>
                </div>
            </div>
        </div>
    )
}

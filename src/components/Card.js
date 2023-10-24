import React from 'react'

export default function Card(props) {
    return (
        <div style={{width: 300}} className='flex flex-col items-center'>
            <img className='' style={{width: 300, height: 480}} src={props.src} alt='toppicks'/>
            <text className='text-gray-500 mt-5'>{props.name}</text>
            <text className='font-bold italic mt-0.5'>LKR {props.price}</text>
        </div>
    )
}
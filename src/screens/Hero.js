import React from 'react'
import NavBar from '../components/NavBar'

export default function Hero() {
      
    return (
        <div className='bg-cover bg-no-repeat bg-center h-screen' style={{ backgroundImage: 'url("https://whatworksgrowth.org/wp-content/uploads/marc-olivier-jodoin-HIiNFXcbtQ-unsplash-1920x1280.jpg")'}}>
            <div className='mx-32'>
                <NavBar/>
                <div className='flex flex-row justify-between mt-36'>
                    <div className='flex flex-col self-end'>
                        <div className='flex flex-row bg-yellow h-fit py-6'>
                            <img className='mx-5 rounded-full' style={{width:100, height:100}} src='https://static9.depositphotos.com/1006243/1164/v/950/depositphotos_11647884-stock-illustration-cartoon-building.jpg' alt='building'/>
                            <div className='flex flex-col w-60 mr-8'>
                                <text className='italic font-semibold text-sm mb-4'>CHANGE WITH SLIDER</text>
                                <text className='text-sm font-light'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia facilisi.</text>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-3'>
                            <div className='w-10 bg-white'></div>
                        </div>
                    </div>
                    <div className='flex flex-col text-white ' style={{width: 485 }}>
                        <text className='mb-3 font-bold text-6xl pr-2 leading-tight'>THE HOME PAGE<br/>IS THE FIRST<br/>THING VISITORS</text>
                        <text className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer aliquet, tortor at bibendum aliquet, felis tellus ultrices.</text>
                    </div>
                </div>
            </div>
        </div>
    )
}

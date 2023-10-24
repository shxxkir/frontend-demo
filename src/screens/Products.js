import React from 'react'

export default function Products() {
    return (
        <div className='flex flex-row mx-32 justify-between mt-10'>
            <div className='bg-cover bg-no-repeat bg-center' style={{width:620, height:620, backgroundImage: 'url("https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8")'}}>
                <div className='flex flex-col gap-y-5 pt-12 pl-12'>
                    <text className='font-bold text-3xl' style={{letterSpacing: 1}}>MAIN PRODUCT</text>
                    <button className='w-fit italic font-semibold text-sm text-white bg-black py-3 px-10'>
                        GO TO MAIN PAGE   
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-between text-white'>
                <div className='bg-cover bg-no-repeat bg-center' style={{width:620, height:300, backgroundImage: 'url("https://images.unsplash.com/photo-1452696193712-6cabf5103b63?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
                    <div className='flex flex-col gap-y-5 pt-12 pl-12'>
                        <text className='font-bold text-3xl ' style={{letterSpacing: 1}}>SUB PRODUCT 01</text>
                        <text className='italic underline text-sm font-semibold'>GO TO SUB PRODUCT</text>
                    </div>
                </div> 
                <div className='bg-cover bg-no-repeat bg-center ' style={{width:620, height:300, backgroundImage: 'url("https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8")'}}>
                    <div className='flex flex-col gap-y-5 pt-12 pl-12'>
                        <text className='font-bold text-3xl' style={{letterSpacing: 1}}>SUB PRODUCT 02</text>
                        <text className='italic underline text-sm font-semibold'>GO TO SUB PRODUCT</text>
                    </div>
                </div>
            </div>
        </div>
    )
}

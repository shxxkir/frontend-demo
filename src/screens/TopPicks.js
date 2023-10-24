import React from 'react'
import Card from '../components/Card'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function TopPicks() {
    return (
        <div className='flex flex-col mx-32 mt-16'>
            <div className='flex flex-col items-center mb-10 self-center' style={{width: 900}}>
                <text className='font-bold text-4xl uppercase mb-4'>Top Picks from Our Collection</text>
                <text className='text-md text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer aliquet, tortor at bibendum aliquet, felis tellus ultrices nisl, ac fermentum augue risus id nulla. Phasellus convallis hendrerit enim.</text>
            </div>
            <div className='flex flex-row justify-evenly mb-8'>
                <Card name='Lorem ipsum dolor sit amet' price='3,650.00' src='https://images.unsplash.com/photo-1520587393050-c5298e1a8486?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D'/>
                <Card name='consectetur adipiscing elit' price='2150.00' src='https://plus.unsplash.com/premium_photo-1681803606255-cb66b02f2b56?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJpZ2V8ZW58MHx8MHx8fDA%3D'/>
                <Card name='Nulla facilisi. Integer aliquet' price='1650.00' src='https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <Card name='fermentum augue risus' price='3650.00' src='https://images.unsplash.com/photo-1625447520777-fea6c59cd65e?auto=format&fit=crop&q=80&w=1886&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='flex flex-row gap-x-3 justify-center mb-10'>
                <div className='flex w-12 h-12 rounded-full items-center justify-center border border-grey'>
                    <ArrowBackOutlinedIcon fontSize='medium'/>
                </div>
                <div className='flex w-12 h-12 rounded-full items-center justify-center border border-grey'>
                    <ArrowForwardOutlinedIcon fontSize='medium'/>
                </div>
            </div>
        </div>
    )
}

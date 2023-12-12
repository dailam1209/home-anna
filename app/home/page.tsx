import SlideProduct from '@/components/Slide'
import Image from 'next/image'
import React from 'react'
import { RowDown } from '../icons'

const Home = () => {
  return (
    <div>
        <div className='banner flex justify-between lg:h-[50.12rem]  min-w-full '>
            <div className='lg:h-[50.12rem] w-[50%]'>
                <Image src="https://i.pinimg.com/564x/9e/3d/35/9e3d35c123232e755fa70681c2153809.jpg" alt="test"  layout='fill' objectFit='cover'/>
            </div>
            <div className='lg:h-[50.12rem] w-[50%]'>
                <Image src="https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg"  alt="test" fill objectFit='cover'/>
            </div>
        </div>
        <div className='bg-[#EEF9F9] lg:px-[6.25rem] md:px-[3.5rem] lg:pt-[8.12rem] md:pt-[4.12rem] md:text-center sm:flex sm:justify-center sm:pt-[4.12rem]'>
            <div className=' flex top-sale lg:text-[2.375rem] font-black text-[#55D5D2] uppercase lg:h-[2.85rem] items-center'>
                <div className='flex relative '>
                    <span className='relative'>Flash Sale</span>
                    <div className='line-bottom w-full '></div>
                </div>
                <span className='text-[#454545] col-before ml-[5.07rem] relative'>bán chạy nhất</span>
            </div>
            <div className='rounded-[1rem] lg:mx-[0rem] lg:mt-[2rem] md:mt-[2rem]  pb-[3.5rem] relative'> 
                <SlideProduct number={1}/>
            </div>
        </div>
        <div className='flex  justify-center mb-[0.97rem]'>
            <RowDown/>
        </div>
        <div className='flex title-scroll-auto overflow-hidden whitespace-nowrap'>
            <p className='uppercase font-black text-[4.25rem] text-[#CAF2F1] mr-[1.62rem] leading-[6.375rem]'> Supper event 2023<span>birthday 9th anna</span></p>
            <p className='uppercase font-black text-[4.25rem] text-[#CAF2F1] mr-[1.62rem] leading-[6.375rem]'> Supper event 2023<span>birthday 9th anna</span></p>
        </div>
    </div>
  )
}
export default Home
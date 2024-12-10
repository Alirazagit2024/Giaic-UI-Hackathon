import React from 'react'
import '@/app/css/satoshi.css'
import Image from 'next/image'
import browse1 from '@/app/assets/browse1.png'
import browse2 from '@/app/assets/browse2.png'
import browse3 from '@/app/assets/browse3.png'
import browse4 from '@/app/assets/browse4.png'
const Browse = () => {
  return (
    <>
     <div className='flex justify-center items-center'>
        <div className='bg-[#F0F0F0] h-[975px] mx-auto w-full grid grid-cols-1 my-[50px]  rounded-[20px] md:w-[1260px] md:h-[866px] md:rounded-[40px] md:mx-[100px]'>
            <h1 className='font-bold text-[32px] leading-[36px] mx-[56px] mt-[40px] mb-[28px] flex justify-center text-center md:w-[687px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:mx-auto md:mt-[70px]' style={{fontFamily:"integral"}}>BROWSE BY dress STYLE</h1>
        <div className='relative flex mx-auto flex-wrap flex-col-1 gap-4  mb-[27px] md:flex-wrap flex-col-2 md:mx-[64px] justify-center items-center'>
            <Image src={browse1} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[307px] md:h-[289px]'/>
            <Image src={browse2} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[584px] md:h-[289px]'/>
            <Image src={browse3} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[584px] md:h-[289px]'/>
            <Image src={browse4} alt='image' className='w-[310px] h-[190px] rounded-[20px] md:w-[307px] md:h-[289px]'/>
        </div>
        
        </div>
     </div>

    </>
  )
}

export default Browse

import React from 'react';
import '@/app/css/satoshi.css';
import Image from 'next/image';
import fiveStar from '@/app/assets/fivestar.png';
import varified from '@/app/assets/verified.png';

const HappyCustomer = () => {
  return (
    <>
      <div className='flex flex-col mb-[174px] md:mb-[120px] md:w-[1260px] mx-auto'>
        {/* Title */}
        <div className='w-[300px] text-center flex justify-start leading-9 text-[32px] ml-4 font-bold md:w-[654px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:ml-[100px]'>
          <h1 style={{fontFamily:"integral"}}>OUR HAPPY CUSTOMERS</h1>
        </div>

        {/* Customer Reviews Section */}
        <div className='flex flex-col justify-center items-center gap-5 mt-[24px] md:flex-row md:mt-[40px] md:mx-[100px]'>
          {/* Review 1 */}
          <div className='w-[300px] max-w-[358px] h-auto flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[340px] md:h-[auto]'>
            <div className='w-full max-w-[310px]'>
              <Image src={fiveStar} alt='fiveStar' className='w-[118px] h-[19.19px]' />
              <h1 style={{fontFamily:"Satoshi-regular"}} className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[89px] h-[19px] md:w-[110px] md:h-[24px] md:text-xl md:pt-5'>
                Sarah M. 
                <span><Image src={varified} alt='verified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]' /></span>
              </h1>
              <p className='pt-2 w-[270px] font-normal text-[14px] opacity-60 md:w-[306px] md:h-[110px] md:leading-[22px] md:pt-4'>
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className='w-[300px] max-w-[358px] h-auto flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[340px] md:h-[auto]'>
            <div className='w-full max-w-[310px]'>
              <Image src={fiveStar} alt='fiveStar' className='w-[118px] h-[19.19px]' />
              <h1 style={{fontFamily:"Satoshi-regular"}} className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[89px] h-[19px] md:w-[110px] md:h-[24px] md:text-xl md:pt-5'>
                Alex K. 
                <span><Image src={varified} alt='verified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]' /></span>
              </h1>
              <p className='pt-2 w-[270px] font-normal text-[14px] opacity-60 md:w-[306px] md:h-[110px] md:leading-[22px] md:pt-4'>
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
              </p>
            </div>
          </div>

          {/* Review 3 */}
          <div className='w-[300px] max-w-[358px] h-[auto] flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[340px] md:h-[auto]'>
            <div className='w-full max-w-[310px]'>
              <Image src={fiveStar} alt='fiveStar' className='w-[118px] h-[19.19px]' />
              <h1 style={{fontFamily:"Satoshi-regular"}} className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[89px] h-[19px] md:w-[110px] md:h-[24px] md:text-xl md:pt-5'>
                James L. 
                <span><Image src={varified} alt='verified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]' /></span>
              </h1>
              <p className='pt-2 w-[270px] font-normal text-[14px] opacity-60 md:w-[306px] md:h-[110px] md:leading-[22px] md:pt-4'>
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomer;

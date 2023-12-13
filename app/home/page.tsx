import SlideProduct from '@/components/Slide';
import Image from 'next/image';
import React from 'react';
import { Change, Clean, ColectionArrow, Executive, Free, Plus, RowDown } from '../icons';
import Iterm from '@/components/Item';
import Choose from '@/components/Choose';
import Address from '@/components/Address';

const Home = () => {
    const length = [1, 2, 3, 4, 1, 2, 3, 4]
  return (
    <div>
      <div className="banner flex justify-between lg:h-[50.12rem] min-w-full ">
        <div className="lg:h-[50.12rem] w-[50%]">
          <Image
            src="https://i.pinimg.com/564x/9e/3d/35/9e3d35c123232e755fa70681c2153809.jpg"
            alt="test"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="lg:h-[50.12rem] w-[50%]">
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg"
            alt="test"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="bg-[#EEF9F9] lg:px-[6.25rem] md:px-[3.5rem] lg:pt-[8.12rem] md:pt-[4.12rem] ">
        <div className=" flex top-sale lg:text-[2.375rem] font-black text-[#55D5D2] uppercase lg:h-[2.85rem] items-center">
          <div className="flex relative ">
            <span className="relative">Flash Sale</span>
            <div className="line-bottom w-full "></div>
          </div>
          <span className="text-[#454545] col-before ml-[5.07rem] relative">
            bán chạy nhất
          </span>
        </div>
        <div className="rounded-[1rem] lg:mx-[0rem] lg:mt-[2rem] md:mt-[1.5rem]  pb-[3.5rem] relative max-sm:hidden md:pb-[1.5rem]">
          <SlideProduct number={1} />
        </div>
        <div className="hidden mx-[6.25rem] max-md-w-full max-sm:mx-0 mb-[10rem] max-sm:pl-[0.62rem] max-sm:bg-[#EEFBFB] max-sm:pb-[2.25rem] max-sm:mb-[1.5rem]">
          <div className="hidden-scollbar mt-[2.13rem] flex justify-center max-lg:overflow-x-scroll max-lg:overflow-y-hidden max-sm:overflow-x-scroll max-sm:overflow-y-hidden max-sm:h-[13rem] max-sm:mt-[1rem] relative max-sm:h-[16.5rem]">
            <div className="flex max-sm:left-0 absolute ">
              <Iterm />
              <Iterm />
              <Iterm />
              <Iterm />
            </div>
          </div>
        </div>
      </div>
      {/* icon down */}
      <div className="flex justify-center  pb-[0.97rem] max-sm:mb-[0.83rem] bg-[#EEF9F9] max-sm:bg-white">
        <div className="items-center w-full lg:w-[4.5rem]  sm:w-[2.5rem] sm:h-[2.5rem] ">
          <RowDown />
        </div>
      </div>
      {/* text scroll */}
      <div className='block lg:bg-[#EEF9F9] sm:bg-white  pb-[2.5rem] '>
        <div className=" flex title-scroll-auto overflow-hidden whitespace-nowrap text-[4.25rem] leading-[6.375rem] max-sm:text-[1.875rem] max-sm:leading-[2.8125rem]">
            <p className="uppercase font-black  text-[#CAF2F1] mr-[1.62rem] ">
            {' '}
            Supper event 2023<span>birthday 9th anna</span>
            </p>
            <p className="uppercase font-black text-[#CAF2F1] mr-[1.62rem] ">
            {' '}
            Supper event 2023<span>birthday 9th anna</span>
            </p>
        </div>
      </div>
      {/* image  */}
      <div className='h-[9.15625rem] lg:bg-[#EEF9F9] relative flex justify-center mb-[16.65625rem] sm:bg-white'>
        <div className='grid grid-cols-2 grid-flow-row gap-1 lg:h-[18.3125rem] absolute top-0 '>
            <div className='w-[100%] relative  mr-[0.75rem] '>
                <Image
                src="https://lh3.googleusercontent.com/pw/ABLVV86aKq9-kJEzYtnnhy1H5iwZ-RkJuKAg4plhm1repBQO-MBu_nW1SOxywT1tn18eSciVdHZofd_1SLy6Lo3X3VaWYkLDX5ULPuTk2oQS6odK0lll0_MvJLCgRhCAhqgKYaxRtvXpdajCl6-vtFOEqo508IGfN7ShK-IfJe-dViNb5VMnkXOC7FJWcTEohnH0OYw_A8hwd60NqPpaih5e4ZTw2xj2s6rpeSlzw3iAJw0f-inu90WECFXN_xkvEGTYLE8yANc-ieS8wqLic6eIBycsLY2KUGmSXjHHQ0I7xMdBLWl-pIYuq3gPcX9vyA87l896nqDQ_N2Ih8cgvzd6hdvMtNWgVsn0pe3IhZpxOftNChiBgaCWEr1eGS6us9nPaeTPwNIWVxO90ej6nEtiVPEmPgQHjJf-JQgozbvtJ4HSaCJjIbcLlIswgY9mHBavh8rEOA2Z7tuoA1E5JGVtM6gdv7pZ7c9iZp6p5o1vU3PqSAV2_3N-tOytrrmOuvlgeuiLopiedE9jTvFvuue46vO8SWgenFi4Y-OXarUwO-fecpG_udESHmFIBjyVp47qzdSrZuq9tKoArb3S3JasmDspflm9Rc0apNRWgMAfU1QrMQattSrVtBQ8Qo0snIals6IiGAgbU-l4hp_4lH3a9rRNqLGTJpkFuhnZa4i-80WEThfBN66dC_dyP_cmGMaLH1BvGyXt77r0qsnfKhB7OUIySOVNNO6-UHJ0JUHeg3VrjM3KtdbHgbispyA_8-KU7fklW2nSad6DX80vNFozSy_5gFw4AcZSgt-2sXXVrCLJZGocf4gSw0rvlqCdgQtLCnLWj9Ly_perTLrD-cD9x5X9IQ6ZDBboDIaatj_r21Zn8iJf1WV9S9fiaH-C=w688-h294-s-no-gm?authuser=0"
                alt=""
                layout='fill'
                sizes='100vw'
                objectFit='contain'
                />
            </div>
            <div className='w-[100%] block relative ml-[0.75rem]'>
                <Image
                src="https://lh3.googleusercontent.com/pw/ABLVV86aKq9-kJEzYtnnhy1H5iwZ-RkJuKAg4plhm1repBQO-MBu_nW1SOxywT1tn18eSciVdHZofd_1SLy6Lo3X3VaWYkLDX5ULPuTk2oQS6odK0lll0_MvJLCgRhCAhqgKYaxRtvXpdajCl6-vtFOEqo508IGfN7ShK-IfJe-dViNb5VMnkXOC7FJWcTEohnH0OYw_A8hwd60NqPpaih5e4ZTw2xj2s6rpeSlzw3iAJw0f-inu90WECFXN_xkvEGTYLE8yANc-ieS8wqLic6eIBycsLY2KUGmSXjHHQ0I7xMdBLWl-pIYuq3gPcX9vyA87l896nqDQ_N2Ih8cgvzd6hdvMtNWgVsn0pe3IhZpxOftNChiBgaCWEr1eGS6us9nPaeTPwNIWVxO90ej6nEtiVPEmPgQHjJf-JQgozbvtJ4HSaCJjIbcLlIswgY9mHBavh8rEOA2Z7tuoA1E5JGVtM6gdv7pZ7c9iZp6p5o1vU3PqSAV2_3N-tOytrrmOuvlgeuiLopiedE9jTvFvuue46vO8SWgenFi4Y-OXarUwO-fecpG_udESHmFIBjyVp47qzdSrZuq9tKoArb3S3JasmDspflm9Rc0apNRWgMAfU1QrMQattSrVtBQ8Qo0snIals6IiGAgbU-l4hp_4lH3a9rRNqLGTJpkFuhnZa4i-80WEThfBN66dC_dyP_cmGMaLH1BvGyXt77r0qsnfKhB7OUIySOVNNO6-UHJ0JUHeg3VrjM3KtdbHgbispyA_8-KU7fklW2nSad6DX80vNFozSy_5gFw4AcZSgt-2sXXVrCLJZGocf4gSw0rvlqCdgQtLCnLWj9Ly_perTLrD-cD9x5X9IQ6ZDBboDIaatj_r21Zn8iJf1WV9S9fiaH-C=w688-h294-s-no-gm?authuser=0"
                alt=""
                layout='fill'
                sizes='100vw'
                objectFit='contain'
                />
            </div>
            
        </div>
      </div>
      {/* collection */}
      <div>
        {/* title */}
        <div className='flex px-[6.25rem] justify-between items-center pb-[2.5rem]'>
            <h3 className='text-[2.375rem] leading-[2.85rem] font-black uppercase'>bộ sưu tập mới nhất</h3>
            <div className='test'>
                <ul className='flex font-black text-[1.125rem] justify-center items-center '>
                    <li className='flex text-[#454545] mr-[2.5rem] '>
                        <ColectionArrow/>
                        <span className='pl-[0.75rem] leading-[1.6875rem]'>Gọng kính</span>
                    </li>
                    <li className='flex text-[#454545] mr-[2.5rem]'>
                    <ColectionArrow/>
                        <span className='pl-[0.75rem] leading-[1.6875rem]'>Tròng Kính</span>
                    </li>
                    <li className='flex text-[#454545] mr-[2.5rem]'>
                    <ColectionArrow/>
                        <span className='pl-[0.75rem] leading-[1.6875rem]'>Kính râm</span>
                    </li>
                    <li className='flex text-[#454545] mr-[2.5rem]'>
                    <ColectionArrow/>
                        <span className='pl-[0.75rem] leading-[1.6875rem]'>Kính áp tròng</span>
                    </li>
                    <li className='flex text-[#454545] mr-[2.5rem]'>
                    <ColectionArrow/>
                        <span className='text-[#C5C5C5] pl-[0.75rem] leading-[1.6875rem]'>Xem thêm</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      {/* list colection */}
      <div className='grid grid-rows-2 grid-flow-col gap-4 px-[6.25rem]'>
       {
          length.map((item, index) => (
            <div className='h-[26.5rem] colection-shadown'>
                <Iterm/>
            </div>
          ))
       }
      </div>
      {/* button plus */}
      <div className='mx-[6.25rem] w-[calc(100%_-_13rrem])] flex justify-center  text-center items-center mt-[2.75rem] py-[1.06rem] px-[1.88rem] rounded-[3.125rem] border-[1px] border-[#55D5D2]'>
            <p className='text-[1.125rem] text-[#55D5D2] font-extrabold leading-[1.4625rem]'>XEM THÊM GỌNG KÍNH</p>
            <div className='w-[1.5rem] h-[1.5rem] pl-[0.62rem]'>
                <Plus/>
            </div>
      </div>
      {/* Service */}

      <div className='py-[7.5rem]'>
      <div className="max-lg:mx-[0.75rem] flex justify-between text-[#454545] px-[6.25rem] max-sm:flex-wrap max-sm:mx-0 max-sm:px-[1.5rem] max-sm:py-[1rem] max-sm:bg-[#EEFBFB] border-y border-[#55D5D2] py-[1.88rem]">
        <div className="flex  justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:mr-[0.5rem] max-sm:rounded-none max-sm:border-none max-sm:justify-start">
          <Executive />
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem] max-sm:px-[0.75rem]">
            Bảo hành trọn đời
          </p>
        </div>
        <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start max-sm:mr-0">
          <Change />

          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
            Đo mắt miễn phí
          </p>
        </div>
        <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)]  max-sm:mb-[1rem] max-sm:mr-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start">
          <Free />
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
            Thu cũ đổi mới
          </p>
        </div>
        <div id="check-scroll-to-show" className="flex justify-center  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start">
          <Clean />
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
            Vệ sinh và bảo quản kính
          </p>
        </div>
      </div>
      </div>
      {/* Choose */}
      <Choose/>
      <Address/>
    </div>
  );
};
export default Home;

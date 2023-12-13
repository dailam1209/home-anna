"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import {
  ArrowRight,
  ArrowSlideLeft,
  ArrowSlideRight,
  ArrowTopRight,
  FlowAddress,
} from '@/app/icons';
import Image from 'next/image';


const Address = () => {
  return (
    <div className="flex bg-[#55D5D2] w-full">
      <div className="w-full pt-[8.75rem] pb-[8.1rem] px-[6.25rem] flex justify-between">
        {/* interesting things */}

        <div className="w-[44.5rem] text-[2.8125rem] font-[850] leading-[3.9375rem] text-white">
          <h3 className="text-[4rem] leading-[4.8rem] font-black ">
            NHỮNG ĐIỀU THÚ VỊ CHỈ CÓ TẠI ANNA
          </h3>
          <p className="text-[2.8125rem]">
            Được thành lập từ năm 2015, trải qua hơn 8 năm phát triển kính mắt
            Anna đ
            <span className="opacity-[0.4]">
              ã, đang và sẽ chiếm vị trí không thể thiếu đối với các bạn trẻ.
            </span>
          </p>
          <p className="text-[2.8125rem] opacity-[0.4]">
            Với quy mô trên toàn quốc, Anna sẽ tiếp tục mở rộng thêm chi nhánh
            để mang những sản phẩm chất lượng đến tay người dùng
          </p>
        </div>
        {/* address */}
        <div className="address-swiper ml-[4.75rem] w-[40.23413rem] h-[31.5rem]">
          <Swiper
            spaceBetween={0}
            loop={true}
            pagination={{
                clickable: true,
              }}
            modules={[Pagination, Navigation]}
            className="mySwiper rounded-[1rem] address-all "
          >
            <SwiperSlide className="">
              <ItemInAddress />
            </SwiperSlide>
            <SwiperSlide className="">
              <ItemInAddress />
            </SwiperSlide>
            <SwiperSlide className="">
              <ItemInAddress />
            </SwiperSlide>
            <SwiperSlide className="">
              <ItemInAddress />
            </SwiperSlide>
            <SwiperSlide className="">
              <ItemInAddress />
            </SwiperSlide>
          </Swiper>
          <div className='w-[calc(100%_-_13rrem])] flex justify-between h-[3.2rem]  text-center items-center mt-[1.5rem] py-[0.25rem]  rounded-[3.125rem] border-[1px] border-[#55D5D2] bg-[#F58F5D]'>
            <p className='text-[1.125rem] text-[#fff] font-extrabold leading-[1.35rem] pl-[3rem]'>TÌM KIẾM CỬA HÀNG GẦN BẠN</p>
            <div className='flow-address w-[1.99981rem] h-[2rem] mr-[0.25rem]'>
            <FlowAddress/>
            </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export const ItemInAddress = () => {
  return (
    <div className="relative h-[30.5rem]">
      <div>
        <Image
          src="https://lh3.googleusercontent.com/pw/ABLVV87jYmpQ1jlIGYKR-lJGbuWzpQyE-YIvJQ64asCBD6tq7E5ZT8ootGESqHekBN7L_wV0inTDt5pfqUwa__P5kTuNZd0TIFie2GsK6rGf8dE7UT4l_2dgoqQC_pVua9kpREVTRTincetBTI1GyyBVbs7RW9aZ8ydo0HuZgg27NLsojr4oVZGj21_nDhI7cjk40oLUYQdWOAtLzF2bmaa14oBSz3S918iOG2iqY_SKOzMFWaUbzjDJZpGRSWp1c2PebxOLbfCWdCdRqCchIAv2hbKo3kbM9rUZzm6mKzKCb7CULRsSEKIshN6cn5pOEH0_uLNToEBfJvTxJF_8IyZlJ5K0OvGavkTFZ_LKZbziG_06FY_KExYt0qX7w1OVlwE9aJjW1xhVopBTl8Rt1mJ9OocRI-rIP7uExRuJ8A8z0vZJ_7UWkoq4NIo0HJek8Qd3fzmvMFT3AcBmReXyTR5yLJldPnHfFb50ma3Vr0dYN2O5AKbB1-0eOi39cpssrkUAKQ59pyNn1gEGL35LHIZfaHe-aR4UNMRn1vBX66lJPLNtkXl-TYQPDDmWktdwKyVUDU8ntLZedKkNybUI3vO47Yxdw1V3lBo3q7kH5kUOoDvobjDNS0DbSGpEdHF7NgwzpHKyYtbsT1rBaFzB5PXTiQ_qxW3SP8iqEs9zcQ8QnCpUy_yuP_uZ4_uV2pWFaIQL3tq0B5zbWqfZs36Yx-zJ4O5NzE3-OEeVNvkIo1CjCyxAPaooloA0U6S48q3Zueuy1ykl5uDtfl8-GEgyBzQwAtIHa3nlSa32KS7Vg1pUdRkV9R8gMRPXUroQhAgPEmGbmTLSdyZNJev3jwWXgEDtQwPtvsG4H7s-2rdizHWHwzCi61kHnvOsryi2yodi=w624-h500-s-no-gm?authuser=0"
          alt="address"
          fill
          objectFit="fill"
        />
      </div>
      <div className="absolute bottom-[1.5rem] right-0 left-0 bg-[#0000004d]  rounded-[1.25rem] m-[0.35rem] text-white flex justify-between items-center ">
        <div className="py-[1.13rem] pl-[1.31rem]">
          <h5 className="text-[1.5rem] font-black leading-[1.8rem] uppercase">
            khai trương cửa hàng mới
          </h5>
          <p>
            Địa chỉ: 37/18 Dọc bún 2 - La Khê - Văn Khê<br></br>
            Hà Đông - Hà Nội
          </p>
        </div>
        <div className="address-icon mr-[1.94rem] w-[1.625rem] h-[ 1.625rem]">
          <ArrowTopRight/>
        </div>
      </div>
    </div>
  );
};

export default Address;

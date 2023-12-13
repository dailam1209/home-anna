import { ArrowRight, ArrowTopRightActive } from '@/app/icons';
import Image from 'next/image';
import React from 'react';

const Choose = () => {
  return (
    <div className="flex">
      <div className="w-[28.875rem] h-[40.0625rem] bg-red-500  mt-[4.81rem]">
        <Image
          src="https://lh3.googleusercontent.com/pw/ABLVV85IaIZ8un1K92Gbsr7LnRcvJB954JGrgnJflzEqZoqzObhiuFy5Hbjz1z3oFAyuyi66Kqu6cyYvZTqKn05WxqWnaSDoBP_jFKhg47KZvseePmuebR1t_hMFZ7n9lwHUJJvg-4XlyKjOTtpGLGUVb7Uxb_oImW5rY5Qg2Hdc1lP4t_jKPGOu4Z9eN-7rrb-v3eLgpLcvnKNbH96MgZ_PpwSBLXouCz0Rp30t00AnNhswaWFVQFoswZuH0GzS0nRtUfyv6GnuETW4fxyk7B2sfnfsX1g53E-lat_JW_B0dVuPNyqsgv7oVIAR9HhjnAzWxc4gUofWETQ-F7zk5zwl9CtJt60TVKgZo0rSR4pUQRKTfbpw4NFlSbqEBS7tHIWJZokeTG-InxbdifkxA3jKbLk8a-Si9Uo0Q9PIEjyLxUXF8IM7goXjcZhOm8SLOj50JnVe1ijotWom2oncPMVOyJk9ULADernq-YdyhJ4tLbnBFcuN7iwX9_Y_pwwF848Pnni2f5Jq8x5fn-Vsq-UEs7SB9sTb29ORUC46AeqAkFofrZ3dP6h8ud2WjnW1cXrJYHBWDtm1asYBHWSNFBNWYhcbgGrGk64HwOt1Sbret-X22cGHlNAUC-yjjL6DgTMYFN-nY_iLwz3-N25eR4ySINzBC10DZvLinOXqtVXZpC_rA2Uh-Q9o9Ey-NdkRi-BIoa8GnwsUlkkTvWd_3kOxjH5rIaQhQuvseDp3pUmYpCElStK0AgGOdKojrhX0YVK8F4tJdoBoUKtdwUPkXcHP0x4oNOEWnm5GNnTAJSOzkSAsEiaYpo5ijrBeT1uRV_y1RcKlnqcQ5GZxrKsh7x1HH8L4zHcHXoqEkkUUtxH9EQgPb70Gpj23g4b5t_Ja=w462-h641-s-no-gm?authuser=0"
          alt="manenger"
          fill
          objectFit='fill'
        />
      </div>
      <div className="w-full">
        <div className="ml-[5.69rem] font-extrabold text-[1.6875rem] uppercase text-[#262626] flex flex-col  mr-[6.25rem] ">
          <h4 className="text-[1.125rem] py-[0.62rem] px-[1.25rem] rounded-[2.5rem] bg-[#CAF2F1] w-fit text-[#454545]">
            Chọn kính phù hợp với bạn
          </h4>
          <div className="pt-[2.75rem] flex justify-between items-center pb-[2.5rem] border-b-[1px] border-[#55D5D2]">
            <div className="flex flex-col justify-start text-left">
              <p className="text-[2.625rem] font-black leading-[3.9375rem] text-[#55D5D2]">
                Chọn kính theo khuôn mặt
              </p>
              <p className="text-[1.125rem] leading-[1.6875rem] text-[#454545] font-extrabold">
                Lựa chọn kính theo hình dáng khuôn mặt và <br></br>
                sở thích cá nhân của bạn
              </p>
            </div>
            <div className="rotate-45 w-[2.88356rem] h-[2.88356rem]  ">
              <ArrowTopRightActive />
            </div>
          </div>
          <div className="pt-[2.75rem] flex justify-between items-center pb-[2.5rem] border-b-[1px] border-[#55D5D2]">
            <div className="flex flex-col justify-start text-left">
              <p className="text-[2.625rem] font-black leading-[3.9375rem] text-[#55D5D2]">
                Chọn kính theo khuôn mặt
              </p>
              <p className="text-[1.125rem] leading-[1.6875rem] text-[#454545] font-extrabold">
                Lựa chọn kính theo hình dáng khuôn mặt và <br></br>
                sở thích cá nhân của bạn
              </p>
            </div>
            <div className="rotate-45 w-[2.88356rem] h-[2.88356rem]  ">
              <ArrowTopRightActive />
            </div>
          </div>
          <div className="pt-[2.75rem] flex justify-between items-center pb-[2.5rem] ">
            <div className="flex flex-col justify-start text-left">
              <p className="text-[2.625rem] font-black leading-[3.9375rem] text-[#55D5D2]">
                Chọn kính theo khuôn mặt
              </p>
              <p className="text-[1.125rem] leading-[1.6875rem] text-[#454545] font-extrabold">
                Lựa chọn kính theo hình dáng khuôn mặt và <br></br>
                sở thích cá nhân của bạn
              </p>
            </div>
            <div className="rotate-45 w-[2.88356rem] h-[2.88356rem]  ">
              <ArrowTopRightActive />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

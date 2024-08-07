import Image from 'next/image';
import NotFoundImg from '@/assets/404_Not_Found.svg';
import { Metadata } from 'next';
import { Button } from '@nextui-org/react';

export const metadata: Metadata = {
   title: 'Page Not Found',
};

const NotFound = () => {
   return (
      <div className="flex flex-col gap-2 min-h-screen justify-center">
         <div className="flex flex-col gap-0 justify-center items-center text-center mb-4">
            <span className="text-5xl font-bold">PAGE NOT FOUND</span>
            <br />
            <span className="text-md font-semibold">{`It's looks like you are lost`}</span>
         </div>
         <div
            className="flex justify-center items-center self-center px-16 pb-8 mt-50 w-full 
      max-w-[1313px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
         >
            <Image
               alt=""
               loading="lazy"
               src={NotFoundImg}
               className="max-w-full aspect-[1.02] "
               width={420}
               height={500}
            />
         </div>
         <div className="justify-center text-center items-center">
            <div className="mb-4">
               <span className="text-xl">
                  Contact us via {''}
                  <span className="font-semibold">test@gmail.com</span>
               </span>
            </div>
            <div className="mb-4">
               <Button
                  color="primary"
                  className="w-1/6 text-base font-medium leading-7 text-white uppercase"
               >
                  Take me out of here
               </Button>
            </div>
         </div>
      </div>
   );
};
export default NotFound;

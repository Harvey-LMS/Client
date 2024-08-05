'use client';

import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Brand from '@/assets/Brand.svg';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowRoundBack } from 'react-icons/io';

interface Errors {
   isError: {
      email: boolean;
   };
   errorMsg: {
      email: string;
   };
}

const ForgotPasswordPage = () => {
   const [email, setEmail] = useState('');

   const [errors, setErrors] = useState<Errors>({
      isError: {
         email: false,
      },
      errorMsg: {
         email: '',
      },
   });

   const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (errors.isError.email) {
         if (email.length > 0) {
            setErrors({
               isError: {
                  ...errors.isError,
                  email: false,
               },
               errorMsg: {
                  ...errors.errorMsg,
                  email: '',
               },
            });
         }
      }
   };

   const checkEmail = () => {
      if (email === '') {
         setErrors({
            isError: {
               ...errors.isError,
               email: true,
            },
            errorMsg: {
               ...errors.errorMsg,
               email: 'Email is required',
            },
         });
         return false;
      } else {
         if (!email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i)) {
            setErrors({
               isError: {
                  ...errors.isError,
                  email: true,
               },
               errorMsg: {
                  ...errors.errorMsg,
                  email: 'Email must be in form example@domainName',
               },
            });
            return false;
         }
      }
      return true;
   };

   const router = useRouter();

   const handleForgotPwd = (e: React.FormEvent) => {
      e.preventDefault();
      if (checkEmail()) {
         console.log('Verify');
         localStorage.setItem('email', email);
         router.push('/otp');
      }
   };

   return (
      <div className="flex flex-col justify-center text-base leading-8">
         <motion.div
            layout
            transition={{ duration: 0.2 }}
            className="flex flex-col px-8 py-7 mt-5 mb-4 max-w-full bg-white border-gray-300 
      rounded-3xl shadow-lg border w-11/12 max-md:px-5"
         >
            <div className="flex gap-3 justify-center items-start self-center pb-8 text-2xl">
               <Image
                  alt="brand"
                  loading="lazy"
                  src={Brand}
                  className="shrink-0 aspect-[0.98] w-[49px]"
               />
               <div className="mt-2.5 font-semibold">HarveyOD</div>
            </div>
            <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90  mb-2">
               <span className="text-2xl">Forgot password</span>
               <br />
               <span className="text-sm font-normal !leading-none">
                  {`We'll send you instructions to reset the password to your email`}
               </span>
            </div>
            <div className="mb-4">
               <Input
                  size="md"
                  type="text"
                  label="Email"
                  variant="bordered"
                  onChange={handleEmail}
                  onBlur={checkEmail}
                  isInvalid={errors.isError.email}
                  errorMessage={
                     <AnimatePresence>
                        {errors.isError.email && (
                           <motion.div
                              layout
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                           >
                              {errors.errorMsg.email}
                           </motion.div>
                        )}
                     </AnimatePresence>
                  }
               ></Input>
            </div>

            <div className="mb-4">
               <Button
                  color="primary"
                  className="w-full justify-center text-center items-center px-16 py-2 
          text-base font-medium tracking-wide leading-7 text-white uppercase rounded-md max-md:px-5"
                  onClick={(e) => handleForgotPwd(e)}
               >
                  Confirm
               </Button>
            </div>

            <div className="justify-center text-center items-center">
               <Button onClick={() => router.push('/login')} variant={'light'}>
                  <div className="flex flex-row gap-2 justify-center items-center font-semibold">
                     <IoIosArrowRoundBack className="text-2xl text-primary" />
                     <span className="text-primary">Back to login</span>
                  </div>
               </Button>
            </div>
         </motion.div>
      </div>
   );
};

export default ForgotPasswordPage;

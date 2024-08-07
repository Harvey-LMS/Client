'use client';
import Image from 'next/image';

import LoginSVG from '@/assets/LoginSVG.svg';
import Brand from '@/assets/Brand.svg';
import Google from '@/assets/Google.svg';
import Facebook from '@/assets/Facebook.svg';
import Twitter from '@/assets/Twitterx.svg';

import Link from 'next/link';
import { Input } from '@nextui-org/input';
import { Button, Checkbox } from '@nextui-org/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { IAccount } from '@/types/course';
import { AnimatePresence, motion } from 'framer-motion';

interface Errors {
   isError: {
      username: boolean;
      password: boolean;
      isLogin: boolean;
   };
   errorMsg: {
      username: string;
      password: string;
      isLogin: string;
   };
}

interface User {
   username: string;
   password: string;
   email: string;
   isVerified: boolean;
}

const Login = () => {
   const [username, setUserName] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [users, setUsers] = useState<IAccount[]>([]);
   // const [isShowErr, setIsShowErr] = useState(false);

   const router = useRouter();

   const [errors, setErrors] = useState<Errors>({
      isError: {
         username: false,
         password: false,
         isLogin: false,
      },
      errorMsg: {
         username: '',
         password: '',
         isLogin: '',
      },
   });

   const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
      if (errors.isError.username) {
         if (username.length > 0) {
            setErrors({
               isError: {
                  ...errors.isError,
                  username: false,
               },
               errorMsg: {
                  ...errors.errorMsg,
                  username: '',
               },
            });
         }
      }
   };

   const checkUserName = () => {
      if (username === '') {
         setErrors({
            isError: {
               ...errors.isError,
               username: true,
            },
            errorMsg: {
               ...errors.errorMsg,
               username: 'Username is required',
            },
         });
         return false;
      }
      return true;
   };

   const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if (errors.isError.password) {
         if (password.length > 0) {
            setErrors({
               isError: {
                  ...errors.isError,
                  password: false,
               },
               errorMsg: {
                  ...errors.errorMsg,
                  password: '',
               },
            });
         }
      }
   };

   const checkPassword = () => {
      if (password === '') {
         setErrors({
            isError: {
               ...errors.isError,
               password: true,
            },
            errorMsg: {
               ...errors.errorMsg,
               password: 'Password is required',
            },
         });
         return false;
      }
      return true;
   };

   const handleLogin = () => {
      if (users != null && checkUserName() && checkPassword()) {
         const user = users.find(
            (user: IAccount) => user.username === username && user.password === password,
         );
         if (user) {
            console.log('Login successful');
            router.push('/otp');
         } else {
            setErrors({
               isError: {
                  ...errors.isError,
                  isLogin: true,
               },
               errorMsg: {
                  ...errors.errorMsg,
                  isLogin: 'Please check your username and password',
               },
            });
         }
      }
   };

   const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT_ACCOUNT;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(apiUrl as string);
            const data = response.data;
            setUsers(data);
         } catch (error) {
            console.log('=>Error: ', error);
         }
      };
      fetchData();
   }, []);

   return (
      <div className="flex justify-center items-center text-base m-auto max-md:flex-col p-0.5 w-full md:px-40 lg:px-5">
         <div className="flex flex-row gap-20 justify-center items-center w-full">
            <Image
               alt="Harvey"
               priority={true}
               src={LoginSVG}
               className="hidden lg:flex"
               width={550}
               height={500}
            />
            <motion.div
               layout
               transition={{ duration: 0.2 }}
               className="flex flex-col px-8 py-7 mt-5 mb-4 max-w-full bg-white border-gray-300 rounded-3xl shadow-lg border w-full lg:w-1/3"
            >
               <div className="flex flex-row gap-3 max-md:hidden justify-center items-center  pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700 text-opacity-90">
                  <Image alt="brand" priority={true} src={Brand} className="" />
                  <div className="mt-2.5">HarveyOD</div>
               </div>
               <div className="flex flex-col">
                  <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90">
                     Welcome to <span className="font-extrabold">HarveyOD</span>
                  </div>
                  <span className="text-sm tracking-normal text-zinc-700 text-opacity-60">
                     Please login to your account
                  </span>
                  <span className="text-sm text-danger-600 mt-2">{errors.errorMsg.isLogin}</span>
               </div>
               <div className="flex flex-col">
                  <div className="mt-5 max-md:flex-col">
                     <Input
                        aria-label="username"
                        className="text-black max-md:max-w-full"
                        variant="bordered"
                        type="email"
                        label="Username"
                        onBlur={checkUserName}
                        onChange={handleUsername}
                        isInvalid={errors.isError.username}
                        errorMessage={
                           <AnimatePresence>
                              {errors.isError.username && (
                                 <motion.div
                                    layout
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                 >
                                    {errors.errorMsg.username}
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        }
                     />
                  </div>
                  <div className="mt-5 max-md:flex-col">
                     <Input
                        aria-label="password"
                        className="text-black max-md:max-w-full"
                        variant="bordered"
                        label="Password"
                        type="password"
                        onBlur={checkPassword}
                        onChange={handlePassword}
                        isInvalid={errors.isError.password}
                        errorMessage={
                           <AnimatePresence>
                              {errors.isError.password && (
                                 <motion.div
                                    layout
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                 >
                                    {errors.errorMsg.password}
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        }
                     />
                  </div>
               </div>
               <div className="flex flex-row items-center justify-between gap-2 pb-4 text-xs tracking-normal">
                  <div className="flex flex-row gap-0 p-2 justify-center items-center text-zinc-700 text-opacity-90">
                     <Checkbox size="sm" />
                     <div className="my-auto">Remember to log in</div>
                  </div>
                  <Link
                     href={'/login/forgot-password'}
                     className="flex text-right text-lime-600 hover:underline"
                  >
                     Forgot password ?
                  </Link>
               </div>
               <Button
                  color="primary"
                  className="justify-center text-center max-w-full w-full items-center px-16 py-2 text-base font-medium tracking-wide leading-7 
              text-white uppercase rounded-md max-md:px-5"
                  onClick={handleLogin}
               >
                  Login
               </Button>
               <div className="flex flex-row justify-center items-center gap-6 my-3">
                  <Link href={'/'}>
                     <Image alt="google-sign-in" loading="lazy" src={Google} className="w-12" />
                  </Link>
                  <Link href={'/'}>
                     <Image alt="facebook-sign-in" loading="lazy" src={Facebook} className="w-12" />
                  </Link>
                  <Link href={'/'}>
                     <Image alt="twitter-sign-in" loading="lazy" src={Twitter} className="w-12" />
                  </Link>
               </div>
               <div className="tracking-normal text-center text-lime-600">
                  <span className="text-zinc-700">{`Don't have an account ?`}</span>{' '}
                  <Link href={'/register'} className="text-lime-600 hover:underline">
                     Sign up
                  </Link>
               </div>
            </motion.div>
         </div>
      </div>
   );
};
export default Login;

"use client";
import Image from "next/image";

import LoginSVG from "@/assets/LoginSVG.svg";
import Brand from "@/assets/Brand.svg";
import Google from "@/assets/Google.svg";
import Facebook from "@/assets/Facebook.svg";
import Twitter from "@/assets/Twitterx.svg";

import Link from "next/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

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

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<any[] | null>(null);
  // const [isShowErr, setIsShowErr] = useState(false);

  const router = useRouter();

  const [errors, setErrors] = useState<Errors>({
    isError: {
      username: false,
      password: false,
      isLogin: false,
    },
    errorMsg: {
      username: "",
      password: "",
      isLogin: "",
    },
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://66651c7fd122c2868e3fcdef.mockapi.io/Account"
  //       );
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("=>Error:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const response = await axios.get(
          "https://66651c7fd122c2868e3fcdef.mockapi.io/Account"
        );
        setUsers(response.data);
      } catch (error) {
        console.log("=>Error: ", error);
      }
    };
    callAPI();
  }, []);

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
            username: "",
          },
        });
      }
    }
  };

  const checkUserName = () => {
    if (username === "") {
      setErrors({
        isError: {
          ...errors.isError,
          username: true,
        },
        errorMsg: {
          ...errors.errorMsg,
          username: "Username is required",
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
            password: "",
          },
        });
      }
    }
  };

  const checkPassword = () => {
    if (password === "") {
      setErrors({
        isError: {
          ...errors.isError,
          password: true,
        },
        errorMsg: {
          ...errors.errorMsg,
          password: "Password is required",
        },
      });
      return false;
    }
    return true;
  };
  // useEffectTest();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (users != null && checkUserName() && checkPassword()) {
      const user = users.find(
        (user: any) => user.username === username && user.password === password
      );
      if (user) {
        console.log("Login successful");
        router.push("/otp");
      } else {
        setErrors({
          isError: {
            ...errors.isError,
            isLogin: true,
          },
          errorMsg: {
            ...errors.errorMsg,
            isLogin: "Please check your username and password",
          },
        });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center text-base leading-6 max-md:flex-col">
      <div
        className="flex flex-col justify-center items-end self-center px-16 py-20
       max-w-full w-[1195px] max-md:w-full max-md:pr-[220px]"
      >
        <Image
          alt="Harvey"
          loading="lazy"
          src={LoginSVG}
          className="flex mr-[610px] mb-[-600px]"
          width={550}
          height={500}
        />
        <div className="flex flex-col px-8 py-7 mt-5 mb-4 max-w-full bg-white border-gray-300 rounded-3xl shadow-lg border w-[450px] ">
          <div className="flex gap-3 max-md:hidden justify-center items-start self-center pb-8 text-2xl font-semibold tracking-wide whitespace-nowrap text-zinc-700 text-opacity-90">
            <Image
              alt="brand"
              loading="lazy"
              src={Brand}
              className="shrink-0 aspect-[0.98] w-[49px]"
            />
            <div className="mt-2.5">HarveyOD</div>
          </div>
          <div className="text-xl font-semibold leading-8 text-zinc-700 text-opacity-90">
            Welcome to <span className="font-extrabold">HarveyOD</span>
          </div>
          <div className="text-sm tracking-normal text-zinc-700 text-opacity-60">
            Please login to your account
          </div>

          {errors.isError.isLogin && (
            <span className="text-sm text-danger-600 mt-2">
              {errors.errorMsg.isLogin}
            </span>
          )}
          <div className="mt-5 max-md:flex-col">
            <Input
              aria-label="username"
              variant="bordered"
              type="email"
              label="Username"
              onBlur={checkUserName}
              onChange={handleUsername}
              isInvalid={errors.isError.username}
              errorMessage={errors.errorMsg.username}
            />
          </div>
          <div className="mt-5">
            <Input
              aria-label="password"
              className="text-black max-md:max-w-full"
              variant="bordered"
              label="Password"
              type="password"
              onBlur={checkPassword}
              onChange={handlePassword}
              isInvalid={errors.isError.password}
              errorMessage={errors.errorMsg.password}
            />
          </div>
          <div className="flex gap-2 pb-4 text-sm tracking-normal">
            <div className="flex gap-2.5 p-2.5 text-zinc-700 text-opacity-90">
              <input type="checkbox" />
              <div className="my-auto">Remember to log in</div>
            </div>
            <Link
              href={"/login/forgot-password"}
              className="flex-1 self-start mt-3 text-right text-lime-600 hover:underline"
            >
              Forgot password ?
            </Link>
          </div>
          <Button
            color="primary"
            className="justify-center text-center max-w-full w-full items-center px-16 py-2 text-base font-medium tracking-wide leading-7 
              text-white uppercase rounded-md max-md:px-5"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </Button>
          <div className="m-3 flex justify-center items-center gap-10">
            <Link href={"/"}>
              <Image
                alt="brand"
                loading="lazy"
                src={Google}
                className="shrink-0 aspect-[0.98] w-[35px]"
              />
            </Link>
            <Link href={"/"}>
              <Image
                alt="brand"
                loading="lazy"
                src={Facebook}
                className="shrink-0 aspect-[0.98] w-[37px]"
              />
            </Link>
            <Link href={"/"}>
              <Image
                alt="brand"
                loading="lazy"
                src={Twitter}
                className="shrink-0 aspect-[0.98] w-[35px]"
              />
            </Link>
          </div>
          <div className="mt-3 tracking-normal leading-6 text-center text-lime-600">
            <span className="text-zinc-700">Don't have an account ?</span>{" "}
            <Link href={"/register"} className="text-lime-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

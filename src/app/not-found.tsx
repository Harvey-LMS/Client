import Image from "next/image";
import NotFoundImg from "@/assets/404_Not_Found.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="flex flex-col max-h-full justify-center pt-20 bg-slate-100">
      <div className="justify-center items-center text-center">
        <span className="text-4xl font-semibold">
          Rất tiếc!Trang bạn tìm kiếm không tồn tại
        </span>
      </div>
      <div className="flex justify-center items-center self-center px-16 pb-8 mt-52 w-full max-w-[1313px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Image
          alt=""
          loading="lazy"
          src={NotFoundImg}
          className="max-w-full aspect-[1.02] w-[460px]"
          width={480}
          height={500}
        />
      </div>
      <div className="justify-center text-center items-center">
        <div className="mb-4">
          <span className="text-xl">
            Liên hệ với chúng tôi qua {""}
            <span className="font-semibold">test@gmail.com</span>
          </span>
        </div>
        <div className="mb-4">
          <Button
            className="px-16 py-2 text-base font-medium tracking-wide leading-7 text-white"
            asChild
          >
            <Link href="/login">Quay về trang chủ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;

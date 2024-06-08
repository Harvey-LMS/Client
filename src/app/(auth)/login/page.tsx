import Brand from "@/assets/Brand.svg";
import Login from "@/components/container/login";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Harvey | Login",
};

const LoginPage = () => {
  return <Login></Login>;
};

export default LoginPage;

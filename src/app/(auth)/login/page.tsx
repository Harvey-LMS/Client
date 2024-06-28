import Login from "@/components/container/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harvey | Login",
};

const LoginPage = () => {
  return <Login></Login>;
};

export default LoginPage;

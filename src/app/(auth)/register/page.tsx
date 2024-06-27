import Register from "@/components/container/auth/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harvey | Register",
};
const RegisterPage = () => {
  return <Register></Register>;
};

export default RegisterPage;

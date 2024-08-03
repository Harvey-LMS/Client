import Register from "@/components/container/auth/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harvey | Register",
  description: "Register page",
};

/* 
  Every field will be call the server 
  to check if the user is already registered.
*/



const RegisterPage = async () => {
  return <Register></Register>;
};

export default RegisterPage;

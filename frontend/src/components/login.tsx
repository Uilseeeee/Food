import { Input } from "./ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Login = () => {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-5/6 flex flex-row items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Create account</h1>
          <h2 className="text-[#71717A]">
            Sign up to explore your favorite dishes.
          </h2>
          <Input type="text" placeholder="Enter your email address" />

          <Button className="bg-gray-500 w-72">Lets go</Button>
          <div className="flex flex-row items-center justify-between">
            <h2>Already have an account ?</h2>
            <Button className="bg-white text-black">Login</Button>
          </div>
        </div>
        <Image src="/delivery.png" alt="Logo" width={700} height={100} />
      </div>
    </div>
  );
};

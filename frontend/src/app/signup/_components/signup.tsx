import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";

type LoginEmailProps = {
  setStep: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

export const Signup = ({ setStep, setEmail, email }: LoginEmailProps) => {
  const handleSubmit = () => {
    setStep("password");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center h-screen justify-center">
        <div className="w-5/6 flex flex-row items-center justify-between">
          <div className="h-72 flex flex-col items-center justify-between self-center">
            <Button className="flex self-start" variant="outline" size="icon">
              <ChevronLeft />
            </Button>

            <h1 className="text-xl font-bold flex self-start">
              Create account
            </h1>
            <h2 className="text-[#71717A]">
              Sign up to explore your favorite dishes.
            </h2>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Enter your email address"
            />

            <Button className="bg-gray-500 w-72" onClick={handleSubmit}>
              Lets go
            </Button>
            <div className="flex flex-row items-center justify-between">
              <h2>Already have an account ?</h2>
              <Link href="/login">
                <Button className="bg-white text-black">Login</Button>
              </Link>
            </div>
          </div>
          <Image src="/delivery.png" alt="Logo" width={700} height={100} />
        </div>
      </div>
       <form onSubmit={handleSubmit}>
      <div className="flex items-center h-screen justify-center">
        <div className="w-5/6 flex flex-row items-center justify-between">
          <div className="h-72 flex flex-col items-center justify-between self-center">
            <Button className="flex self-start" variant="outline" size="icon">
              <ChevronLeft />
            </Button>

            <h1 className="text-xl font-bold flex self-start">
              Create account
            </h1>
            <h2 className="text-[#71717A]">
              Sign up to explore your favorite dishes.
            </h2>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Enter your email address"
            />

            <Button className="bg-gray-500 w-72" onClick={handleSubmit}>
              Lets go
            </Button>
            <div className="flex flex-row items-center justify-between">
              <h2>Already have an account ?</h2>
              <Link href="/login">
                <Button className="bg-white text-black">Login</Button>
              </Link>
            </div>
          </div>
          <Image src="/delivery.png" alt="Logo" width={700} height={100} />
        </div>
      </div>
    </form>
    </form>
    
  );
};

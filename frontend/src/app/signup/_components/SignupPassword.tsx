import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { FormEvent, useState } from "react";

type SignupPasswordProps = {
  email: string;
};

export const SignupPassword = ({ email }: SignupPasswordProps) => {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      data: { message },
    } = await axios.post("http://localhost:8000/users/signup", {
      email,
      password,
    });

    if (message == "User created successfully") {
    }
  };

  return (
    <form
      className="flex items-center h-screen justify-center"
      onSubmit={handleSubmit}
    >
      <div className="w-5/6 flex flex-row items-center justify-between">
        <div className="h-72 flex flex-col items-center justify-between self-center">
          <Button className="flex self-start" variant="outline" size="icon">
            <ChevronLeft></ChevronLeft>
          </Button>

          <h1 className="text-xl font-bold flex self-start">Create password</h1>
          <h2 className="text-[#71717A]">
            Create strong password with letters, numbers
          </h2>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder="Password"
          />
          <Input type="text" placeholder="Confirm" />
          <Button type="submit" className="bg-gray-500 w-72 flex self-start">
            Lets go
          </Button>
          <div className="flex flex-row items-center self-start justify-between">
            <h2>Dont have an account ?</h2>
            <Link href="/signup">
              <Button className="bg-white text-black">Sign up</Button>
            </Link>
          </div>
        </div>
        <Image src="/delivery.png" alt="Logo" width={700} height={100} />
      </div>
    </form>
  );
};

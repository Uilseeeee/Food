"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        email,
        password,
      });

      const { message, token } = response.data;

      if (message === "Login Success") {
        localStorage.setItem("auth_token", token);

        router.push("/home");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during login. Please try again.");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center h-screen justify-center"
    >
      <div className="w-5/6 flex flex-row items-center justify-between">
        <div className="h-72 flex flex-col items-center justify-between self-center">
          <Button className="flex self-start" variant="outline" size="icon">
            <ChevronLeft />
          </Button>
          <h1 className="text-xl font-bold flex self-start">Login</h1>
          <h2 className="text-[#71717A]">
            Sign up to explore your favorite dishes.
          </h2>

          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" className="bg-gray-500 w-72">
            <p>Letgo</p>
          </Button>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex flex-row items-center justify-between">
            <h2>Dont have an account</h2>
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

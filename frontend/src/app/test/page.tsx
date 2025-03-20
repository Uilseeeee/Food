"use client";
import axios from "axios";

import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:8000/users/signup", {
        email,
        password,
      });
      if (res.status === 200) {
        alert("Signup successful");
      };
    } catch {}
  };

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col mt-10
    "
    >
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        className="border-2"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        className="border-2"
      />
      <button type="submit" className="bg-black text-white">
        submit
      </button>
    </form>
  );
};
export default Page;

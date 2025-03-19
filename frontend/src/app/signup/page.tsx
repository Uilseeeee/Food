"use client";

import React, { useState } from "react";
import { Signup } from "./_components/signup";
import { SignupPassword } from "./_components/SignupPassword";

function Page() {
  const [step, setStep] = useState("email");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      {step === "email" && <Signup setStep={setStep} />}

      {step === "password" && <SignupPassword />}
    </div>
  );
}

export default Page;

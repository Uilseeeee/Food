"use client";

import React, { useState } from "react";
import { Signup } from "./_components/signup";
import { SignupPassword } from "./_components/SignupPassword";

function Page() {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");

  return (
    <div>
      {step === "email" && (
        <Signup setStep={setStep} email={email} setEmail={setEmail} />
      )}

      {step === "password" && <SignupPassword email={email} />}
    </div>
  );
}

export default Page;

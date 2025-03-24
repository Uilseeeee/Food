import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full h-60 bg-black ">
        <div className="w-full h-60 flex justify-center items-center">
      <Image src="/footer.png" alt="Logo" width={1500} height={200} />
      <div className="w-4/5 flex justify-center bg-red-400 self-center">
        <div>
            <Image src="/footerLogo.png" alt="Logo" width={100} height={100} />
        </div>
        <div>

        </div>
      </div>
      </div>
    </footer>
  );
};

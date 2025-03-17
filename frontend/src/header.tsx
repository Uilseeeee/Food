import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex bg-[#18181B]">
      <div className="flex flex-row justify-between">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
        <h1 className="text-2xl font-bold">Next.js ll Template</h1>
      </div>
    </header>
  );
};

import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between bg-[#18181B]">
      <div className="flex flex-row">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
        <h1 className="text-2xl font-bold">Next.js ll Template</h1>
      </div>
    </header>
  );
};

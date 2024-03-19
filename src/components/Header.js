import Image from "next/image";
import Search from "../../public/assets/icons/search.svg";
import Arrow from "../../public/assets/icons/down-arrow.svg";

export default function Header() {
  return (
    <main className="fixed top-0 right-0 left-[260px]  py-3 px-6 flex items-center justify-between border-b border-gray-400 bg-white z-50">
      <h3 className="font-bold text-xl">Good Evening Robert</h3>

      <div className="flex items-center gap-1.5 border border-gray-400 rounded-md">
        <Image src={Search} alt="search" />
        <input type="text" className="w-full border-none outline-none"></input>
      </div>

      <div className="flex items-center gap-1.5">
        <p>Profile</p>
        <Image src={Arrow} alt="search" />
      </div>
    </main>
  );
}

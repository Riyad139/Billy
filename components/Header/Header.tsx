import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsCapsule } from "react-icons/bs";
import Image from "next/image";
import Animation from "../Animation/Animations";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full flex flex-col items-center py-10 ">
      <Animation />
      <nav className="flex relative z-10 justify-center gap-10">
        <Link target="_blank" href={"https://t.me/CuteDogBilly"}>
          <FaTelegram
            className="hover:text-white duration-700 cursor-pointer"
            size={80}
          />
        </Link>

        <Link href={"https://x.com/cutedogbilly"} target="_blank">
          <AiFillTwitterCircle
            className="hover:text-white duration-700 cursor-pointer"
            size={87}
          />
        </Link>
        <Link
          href={
            "https://dexscreener.com/base/0xabdaa3b481ccb09d787a2b7e89e855473c0905bd"
          }
          target="_blank"
        ></Link>
        <BsCapsule
          className="hover:text-white duration-700 cursor-pointer"
          size={78}
        />
      </nav>
      <Image
        src={"/dog.png"}
        alt="dog"
        className=" max-w-[20rem] sm:max-w-[30rem] my-image mt-[25%] sm:mt-[5%]"
        height={1920}
        width={1080}
      />
      <div className="relative z-10 flex flex-col sm:mt-0  mt-10 items-center">
        <h1 className="text-7xl my-7 bg-[#EFF7FA] px-2 ">$BILLY</h1>
        <h1 className="text-5xl  bg-[#EFF7FA] px-2 "> on Base</h1>
        <h2 className="text-sm sm:text-4xl bg-[#EFF7FA] my-6">
          ca: 0x681aE8E83fB47B5278133a155EDe6680f7253a8b
        </h2>
      </div>
    </div>
  );
}

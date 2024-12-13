"use client";
import Image from "next/image";
import { roboto } from "../../../libs/fonts";
import { usePathname } from "next/navigation";

export default function AuthSidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-primary   ">
      <div className="flex flex-col">
        <Image
          src="/Logo.png"
          width={394}
          height={374}
          alt="logo"
          className="mx-auto "
        />
        <h1 className="text-white text-6xl text-center font-bold relative">
          <span className="text-green1">RECOVITY</span>
          <span className="absolute inset-0 text-white translate-x-1 translate-y-1">
            RECOVITY
          </span>
        </h1>
        {pathname == "/auth/loginstudent" ? (
          <p
            className={` ${roboto.className} text-white mx-auto text-center w-[341px] h-[42px] mt-9 text-[16px] leading-relaxed  tracking-[0.1em]`}
          >
            Recovity is your one touch solutions to help students find
            activities inline with their subject interest, major and budget.
          </p>
        ) : (
          <p
            className={` ${roboto.className} text-white mx-auto text-center w-[342px] h-[213px] mt-9 text-xl leading-relaxed  tracking-[0.1em]`}
          >
            Recovity is a mobile app that helps students to find activities
            inline with their subject interest, major and budget.
          </p>
        )}
      </div>
    </div>
  );
}

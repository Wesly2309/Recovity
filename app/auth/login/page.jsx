import Image from "next/image";
import Link from "next/link";

export default function HalamanLogin() {
  return (
    <div>
      <h1 className={`text-secondary font-bold text-[45px] text-center mt-12`}>
        LOGIN
      </h1>
      <div className="flex flex-col mt-12">
        <Image
          src="/Logo_UIB.png"
          width={249}
          height={225}
          alt="logo-uib"
          className="mx-auto"
        />
      </div>

      <div className="flex justify-center mt-20">
        <div className="bg-secondary rounded-[21px] w-[302px] h-[50px] font-bold relative flex items-center justify-center">
          <Link href={"/auth/loginstudent"} className="text-white text-[16px]">
            LOGIN AS STUDENT
          </Link>
        </div>
      </div>

      <div
        className="flex justify-center mt-3 font-normal"
        style={{ marginLeft: "39px", marginRight: "39px" }}
      >
        <span className="text-lightblue text-[12px] underline">Need help?</span>
      </div>

      <div
        className="flex justify-center mt-7"
        style={{ marginLeft: "103px", marginRight: "102px" }}
      >
        <div className="bg-lightblue rounded-full w-[46px] h-[43px] flex items-center justify-center mr-[5px]">
          <Image
            src="/notif-icon.svg"
            width={23}
            height={32}
            alt="notif-icon"
          />
        </div>
        <div className="bg-lightblue rounded-full w-[46px] h-[43px] flex items-center justify-center ml-[5px]">
          <Image src="/user-icon.svg" width={26} height={25} alt="user-icon" />
        </div>
      </div>
    </div>
  );
}

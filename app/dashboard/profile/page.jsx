import Image from "next/image";
import { reemkufiink, rethink_sans, roboto } from "../../../libs/fonts";

export default function HalamanProfile() {
  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1
          className={`${rethink_sans.className} font-bold mt-[14px] ml-[32px] text-[36px]`}
        >
          My Profile
        </h1>

        <div className="flex items-center">
          {/* Bell Icon */}
          <div className="w-14 h-14 rounded-full bg-customPurple flex items-center justify-center">
            <Image src={"/bell.svg"} alt="Bell" width={32} height={32} />
          </div>
        </div>
      </div>
      <div className="flex border border-black/30 mt-3 shadow-md h-[187px] mx-[30px] rounded-[21px]">
        <div className="grid grid-cols-1 ">
          <div className="col-span-1">
            <div className="flex justify-center  ">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <Image
                    src={"/kimjiwon.jpeg"}
                    alt="Kim Ji Won"
                    width={122}
                    height={122}
                    className="rounded-full ml-[30px] mt-[29px]"
                  />
                </div>
              </div>
              <div className="col-span-2 mt-5 ml-[35px]">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h1
                      className={`${rethink_sans.className} text-center font-bold mr-[75px] text-[32px]`}
                    >
                      xxx
                    </h1>
                    <h1
                      className={`${reemkufiink.className} text-[30px] text-black/65 ml-[20px] `}
                    >
                      STUDENT
                    </h1>
                     <p
                  className={`${rethink_sans.className}text-black opacity-[0.4] ml-[22px] font-bold text-[14px] underline`}
                >
                  Sistem Informasi
                </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

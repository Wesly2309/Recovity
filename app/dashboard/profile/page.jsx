import Image from "next/image";
import { rethink_sans, roboto } from "../../../libs/fonts";

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
      <div className="flex border border-black/30 mt-3 shadow-md h-[301px] mx-[40px] rounded-[21px]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-1">
                <div className="flex  justify-center  ">
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
                  
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

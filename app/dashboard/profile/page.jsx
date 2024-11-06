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
          <div className="w-14 h-14 rounded-full bg-customPurple flex items-center justify-center mr-10">
            <Image src={"/bell.svg"} alt="Bell" width={32} height={32} />
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex border border-black/30 ml-[30px] mt-[52px] shadow-md h-[187px] mx-[30px] rounded-[15px]">
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <Image
                    src={"/kimjiwon.jpeg"}
                    alt="Kim Ji Won"
                    width={122}
                    height={122}
                    className="rounded-full ml-[15px] mt-[14px]"
                  />
                </div>
              </div>

              {/* Right-side Text and Edit Nickname Section */}
              <div className="col-span-2 mt-[16px] ml-[62px]">
                <div className="flex items-center">
                  <h1
                    className={`${rethink_sans.className} font-bold text-[32px]`}
                  >
                    xxx
                  </h1>

                  {/* Edit Nickname Button - Positioned to the Right of "xxx" */}
                  <div className="ml-[15px] w-[135px] h-[25px] mt-1 flex border border-black/30 bg-white rounded-[30px] items-center justify-center">
                    <span
                      className={`${rethink_sans.className} text-[13px] mr-1 text-whiteGrey opacity-[29%]`}
                    >
                      Edit Nickname
                    </span>
                    <Image
                      src={"/edit-icon.svg"} // Replace with the actual path to your edit icon
                      alt="Edit Icon"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>

                {/* Align STUDENT and Sistem Informasi Text Below the "xxx" and Button Section */}
                <div className="flex flex-col">
                  <h1
                    className={`${reemkufiink.className} text-[30px] text-black/65`}
                  >
                    STUDENT
                  </h1>
                  <p
                    className={`${rethink_sans.className} text-black opacity-[0.4] font-bold text-[14px] underline`}
                  >
                    Sistem Informasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="flex border border-black/30 shadow-md mt-[15px] h-[450px] mx-[30px] rounded-[15px]">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 ml-[24px] mt-[24px]">
            <h1 className={`${rethink_sans.className} font-bold text-[32px]`}>
              Personal Information
            </h1>
            <div className="flex flex-col mt-[15px]">
              <h1
                className={`${rethink_sans.className} text-[20px] mt-[15px] text-#000000 opacity-[33%]`}
              >
                Name
              </h1>
              <h1
                className={`${rethink_sans.className} mt-[5px] text-[20px]`}
              >
                xxx
              </h1>
              <h1
                className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
              >
                Email Address
              </h1>
              <h1
                className={`${rethink_sans.className} mt-[5px] text-[20px]`}
              >
                xxx@gmail.com
              </h1>
              <h1
                className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
              >
                Phone Number
              </h1>
              <h1
                className={`${rethink_sans.className} mt-[5px] text-[20px]`}
              >
                +62x-xxx-xxx
              </h1>
            </div>
          </div>

          {/* Right Side Information */}
          <div className="col-span-1 mt-[91px] mr-[251px]">
            <h1
              className={`${rethink_sans.className} text-[20px] mt-[15px] text-#000000 opacity-[33%]`}
            >
              Address
            </h1>
            <h1
              className={`${rethink_sans.className} mt-[5px] text-[20px]`}
            >
              Jl. xx
            </h1>
            <h1
              className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
            >
              City
            </h1>
            <h1
              className={`${rethink_sans.className} mt-[5px] text-[20px]`}
            >
              Batam
            </h1>
            <h1
              className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
            >
              Postal Code
            </h1>
            <h1
              className={`${rethink_sans.className} mt-[5px] text-[20px]`}
            >
              xxxxxx
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

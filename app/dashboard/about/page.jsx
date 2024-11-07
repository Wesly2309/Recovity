import Image from "next/image";
import { rethink_sans, roboto } from "../../../libs/fonts";

export default function HalamanTeam() {
  return (
    <>
      {/* Header Section */}
     <div className="flex items-center justify-between">
        <h1
          className={`${rethink_sans.className} font-bold mt-[122px] ml-[161px] text-[36px] underline`}
        >
          About
        </h1>

        <div className="flex items-center mb-[92px]">
          {/* Bell Icon */}
          <div className="w-14 h-14 rounded-full bg-customPurple flex items-center justify-center mr-10">
            <Image src={"/bell.svg"} alt="Bell" width={32} height={32} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h1
          className={`${roboto.className} text-center w-[369px] h-[344px] ml-[29px] text-[24px]`}
        >
          Recovity utilise machine learning together with students data in order
          to create a website that could provide students with an inbuilt system
          where they could easily find activities that aligns with their
          interest, major and budget.
        </h1>
        <div className="ml-[10px]">
          <Image
            src={"/reading-a-book.png"} // Replace with the actual path to your edit icon
            alt="Read Book"
            width={360}
            height={360}
          />
        </div>
      </div>
      <h1
        className={`${roboto.className} text-center   pt-[320px]  w-[774px] h-[344px]  text-[14px]`}
      >
        *All data acquired will only be used for development purposes and not be
        spread or given without permission.
      </h1>
    </>
  );
}

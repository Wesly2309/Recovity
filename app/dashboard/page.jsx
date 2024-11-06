import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { reemkufiink, rethink_sans, roboto } from "../../libs/fonts";
import Image from "next/image";

export default function HalamanDashboard() {
  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1
          className={`${rethink_sans.className} mt-[18px] ml-[30px] text-[36px]`}
        >
          Welcome, xxx!
        </h1>

        <div className="flex items-center mt-[14px]">
          {/* Bell Icon */}
          <div className="w-14 h-14 rounded-full bg-customPurple flex items-center justify-center">
            <Image src={"/bell.svg"} alt="Bell" width={32} height={32} />
          </div>

          {/* Profile Picture */}
          <div className="w-16 h-14 ml-2 rounded-full bg-white flex items-center justify-center">
            <Image
              src={"/kimjiwon.jpeg"}
              alt="Profile Picture"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Recommendation Prompt */}
      <div className="mt-[5px] ml-[30px] flex items-center">
        <img
          src="/track-and-stop.svg"
          alt="Track and Stop"
          width={66}
          height={12}
        />
        <span
          className={`${rethink_sans.className} ml-[8px] mt-[1px] text-[16px] underline`}
        >
          Ready to get your recommendations?
        </span>
      </div>

      {/* Recommended Based On Interest Section */}
      <h1
        className={`${rethink_sans.className} underline mt-28 font-bold uppercase text-black text-center text-3xl`}
      >
        Recommended Based On Your Interest
      </h1>

      {/* Recommendation Cards Section */}
      <div className="flex justify-center items-center mt-[12px]">
        {/* Left Arrow Icon */}
        <ArrowLeftCircleIcon className="text-black" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
          {/* Card 1 */}
          <div className="w-[208px] h-[84px] p-3 rounded-[10px] bg-blue4 text-white flex flex-col items-center justify-center">
            <span
              className={`${roboto.className} text-[11px] font-bold text-center`}
            >
              Sertifikasi <br /> Agile Scrum Fundamental
            </span>
            <div className="w-[134px] h-[1px] bg-white mt-[6px] mb-[6px]"></div>{" "}
            {/* White line adjusted */}
            <span
              className={`${roboto.className} text-[9px] font-medium italic text-white`}
            >
              Harga: Rp 500.000,00
            </span>
          </div>

          {/* Card 2 */}
          <div className="w-[208px] h-[84px] p-3 rounded-[10px] bg-blue4 text-white flex flex-col items-center justify-center">
            <span
              className={`${roboto.className} text-[11px] font-bold text-center`}
            >
              Webinar Kepribadian 3: <br /> Social Ethics
            </span>
            <div className="w-[134px] h-[1px] bg-white mt-[6px] mb-[6px]"></div>{" "}
            {/* White line adjusted */}
            <span
              className={`${roboto.className} text-[9px] font-medium italic text-white`}
            >
              Harga: Rp 0,00
            </span>
          </div>

          {/* Card 3 */}
          <div className="w-[208px] h-[84px] p-3 rounded-[10px] bg-blue4 text-white flex flex-col items-center justify-center">
            <span
              className={`${roboto.className} text-[11px] font-bold text-center`}
            >
              Sertifikasi <br /> Project Management Ready
            </span>
            <div className="w-[134px] h-[1px] bg-white mt-[6px] mb-[6px]"></div>{" "}
            {/* White line adjusted */}
            <span
              className={`${roboto.className} text-[9px] font-medium italic text-white`}
            >
              Harga: Rp 1.000.000,00
            </span>
          </div>
        </div>

        {/* Right Arrow Icon */}
        <ArrowRightCircleIcon className="text-black" />
      </div>
      {/* Linear Determinate SVG */}
      <div className="flex justify-center">
        <img
          src="/linear-determinate.svg"
          alt="Linear Determinate"
          style={{
            width: "267px",
            height: "12px",
            marginTop: "18px",
          }}
        />
      </div>
      {/* XXX PROFILE */}
      <h1
        className={`${rethink_sans.className} underline mt-28 font-bold uppercase text-black text-center text-[24px]`}
      >
        XXX PROFILE
      </h1>
      {/* Profile Picture Under XXX PROFILE */}
      <div className="flex border border-black/30 mt-[40px] shadow-md h-[301px] w-[780px] mx-[40px] rounded-[21px]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1">
            <div className="flex  justify-center border-r-2 ">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <Image
                    src={"/kimjiwon.jpeg"}
                    alt="Kim Ji Won"
                    width={135}
                    height={135}
                    className="rounded-full ml-[35px] mt-[40px]"
                  />
                </div>
                <h1
                  className={`${reemkufiink.className} text-[30px] mt-2  text-black/65 ml-[34px] `}
                >
                  STUDENT
                </h1>
                <p
                  className={`${rethink_sans.className}text-black opacity-[0.4] ml-[30px] font-bold text-center text-[14px]`}
                >
                  Sistem Informasi
                </p>
              </div>

              <div className="bg-black  "></div>
            </div>
          </div>
          <div className="col-span-2 mt-[21px] ml-[35px]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className={`${roboto.className} text-center font-bold `}>
                  SUBJECT INTEREST
                </h1>
                <div className="bg-blue4 drop-shadow-lg  w-[191px] h-[221px] rounded-[21px]">
                  <div className="flex flex-col mt-[34px] space-y-6">
                    <p
                      className={`${roboto.className} font-extrabold text-lg text-center text-white `}
                    >
                      Animasi 2D
                    </p>
                    <p
                      className={`${roboto.className} font-extrabold text-lg text-center text-white `}
                    >
                      Machine Learning
                    </p>
                    <p
                      className={`${roboto.className} font-extrabold text-lg text-center text-white `}
                    >
                      Pemograman Web
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[30px] ">
                <h1
                  className={`${roboto.className} font-bold text-[16px] text-center`}
                >
                  MAJOR
                </h1>
                <div className="w-[191px] h-[38px] bg-blue4 flex justify-center items-center rounded-[21px] drop-shadow-lg ml-[30px]">
                  <p className={`${roboto.className} font-bold  text-white`}>
                    Sistem Informasi
                  </p>
                </div>

                <h1
                  className={`${roboto.className} font-bold text-[16px] ml-[38px] text-center mt-[9px]`}
                >
                  BUDGET ESTIMATION
                </h1>
                <div className="w-[191px] h-[38px] bg-blue4 flex justify-center items-center rounded-[21px] drop-shadow-lg ml-[30px]">
                  <p className={`${roboto.className} font-bold  text-white`}>
                    Medium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

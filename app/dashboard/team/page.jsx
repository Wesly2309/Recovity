import Image from "next/image";
import { rethink_sans, roboto } from "../../../libs/fonts";

const fotoTeam = [{
  foto:'./'
}]


export default function HalamanTeam() {
  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1
          className={`${rethink_sans.className} font-bold mt-4 ml-8 text-3xl`}
        >
          Our Team
        </h1>

        <div className="flex items-center mt-[14px]">
        </div>
      </div>

      {/* Team Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3  gap-y-12 mt-[49px] mr-[39px] ml-[37px]">
        {[
          {
            name: "Rusel Hutajulu",
            number: "2231167",
            role: "Data Collection",
          },
          { name: "Steby", number: "2231001", role: "Backend" },
          { name: "Wesly", number: "2231075", role: "Backend" },
          { name: "Kelvin Jonatan", number: "2231124", role: "Data Scientist" },
          { name: "Owen Evander", number: "2231188", role: "Data Scientist" },
          { name: "Selina", number: "2231074", role: "UI/UX" },
        ].map((member, index) => (
          <div
            key={index}
            className="w-full max-w-[206px] h-[150px] bg-white rounded-[15px] border  border-blueGrey/15 shadow-lg  shadow-blueGrey flex flex-col items-center p-4 mx-auto"
          >
            {/* Profile Image */}
            
            {/* Member Details */}
            <h2 className={`${roboto.className} text-black text-2xl mt-4`}>
              {member.name}
            </h2>
            <h3 className={`${roboto.className} text-black text-lg mt-1`}>
              {member.number}
            </h3>
            <p className={`${roboto.className} text-black text-sm mt-2`}>
              Role: {member.role}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

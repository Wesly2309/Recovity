"use client";
import Link from "next/link";
import { Info, User, Users } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { rethink_sans } from "../../../libs/fonts";

export default function Sidebar() {
  const router = useRouter()
  const pathName = usePathname();


  const handleLogout = () => router.push('/auth/login')

  const sidebaritems = [
    {
      id: 1,
      label: "Home",
      path: "/dashboard",
      icon: "/home.svg",
    },
    {
      id: 2,
      label: "Profile",
      path: "/dashboard/profile",
      icon: User,
    },
    {
      id: 3,
      label: "Team",
      path: "/dashboard/team",
      icon: Users,
    },
    {
      id: 4,
      label: "About",
      path: "/dashboard/about",
      icon: Info,
    },
  ];

  return (
    <div className="bg-primary">
      <div className="flex flex-col mt-14">
        <h1 className="text-white text-6xl text-center font-bold relative">
          <span className="text-green1">RECOVITY</span>
          <span className="absolute inset-0 text-white translate-x-1 translate-y-1">
            RECOVITY
          </span>
        </h1>
      </div>

      <div className="mt-10 rounded-[11px] bg-white h-[8px] mx-auto w-[180px]"></div>

      <div className="mt-[51px] flex">
        <div className="flex flex-col mx-auto">
          {sidebaritems.map((item, index) => (
            <Link
              key={item.id}
              href={item.path}
              className={`flex justify-center items-center text-[16px] p-3 space-x-4 text-white ${
                item.path === pathName
                  ? "w-[126px] h-[40px] rounded-[21px] bg-blue2 mx-[67px] mr-[74px]"
                  : "mx-[67px] mr-[74px]"
              }`}
              style={{ marginTop: index > 0 ? "31px" : "0" }}
            >
              {item.icon === "/home.svg" ? (
                <img
                  src={item.icon}
                  alt="Home"
                  className=""
                  style={{ width: "24px", height: "24px" }}
                />
              ) : (
                <item.icon
                  className=""
                  style={{ width: "24px", height: "24px" }}
                />
              )}
              <h1
                className={` ${rethink_sans.className} style={{ marginLeft: '' }}`}
              >
                {item.label}
              </h1>
            </Link>
          ))}
          <div className="flex justify-center mt-[51px] mx-[37px]">
            <button onClick={handleLogout} className="flex items-center justify-center bg-white rounded-[26px] w-[203px] h-[37px] shadow">
              <img
                src="/log-out.svg"
                alt="Log Out"
                className="mr-2"
                style={{ width: "23px", height: "21px" }}
              />
              <h1
                className={` ${rethink_sans.className} text-blue3 font-semibold text-[16px]`}
              >
                LOG OUT
              </h1>
            </button>
          </div>
          <div className="flex mt-[260px] mx-[46px]">
            <div className="bg-customPurple rounded-full w-[36px] h-[35px] flex items-center justify-center">
              <img
                src="/instagram.svg"
                alt="Instagram"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div className="bg-customPurple rounded-full w-[36px] h-[35px] flex items-center justify-center ml-[14px]">
              <img
                src="/twitter.svg"
                alt="Twitter"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div className="bg-customPurple rounded-full w-[36px] h-[35px] flex items-center justify-center ml-[14px]">
              <img
                src="/whatsapp.png"
                alt="WhatsApp"
                style={{ width: "18.94px", height: "18.99px" }}
              />
            </div>
            <div className="bg-customPurple rounded-full w-[36px] h-[35px] flex items-center justify-center ml-[14px]">
              <img
                src="/facebook.svg"
                alt="Facebook"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

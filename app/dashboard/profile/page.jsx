'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { reemkufiink, rethink_sans, roboto } from "../../../libs/fonts";

export default function HalamanProfile() {
  const [student, setStudent] = useState(null);
  const [totalsks , setTotalSKS] = useState(0)

  const fetchStudentData = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get("http://localhost:5000/get_detail_student_data", {
        headers: {
          Authorization: `Bearer ${token}`, // Replace with your valid JWT token
        },
      });

      if (response.data.success) {
        setStudent(response.data.data.student);
        setTotalSKS(Number(response.data.data.sks[0].total_sks))
      } else {
        console.log("Failed to fetch data:", response.data.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data when component mounts
    

    fetchStudentData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Return loading message if data is still being fetched
  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className={`${rethink_sans.className} font-bold mt-[14px] ml-[32px] text-[36px]`}>
          My Profile
        </h1>
      </div>

      {/* Profile Section */}
      <div className="flex border border-black/30 ml-[30px] mt-[52px] shadow-md h-[187px] mx-[30px] rounded-[15px]">
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <Image
                    src="/kimjiwon.jpeg"
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
                  <h1 className={`${rethink_sans.className} font-bold text-[32px]`}>
                    {student.nama_mahasiswa || "xxx"}
                  </h1>
                </div>

                {/* Align STUDENT and Sistem Informasi Text Below */}
                <div className="flex flex-col">
                  <h1 className={`${reemkufiink.className} text-[30px] text-black/65`}>
                    STUDENT
                  </h1>
                  <p className={`${rethink_sans.className} text-black opacity-[0.4] font-bold text-[14px] underline`}>
                    Sistem Informasi
                  </p>
                  <p className={`${rethink_sans.className} text-black opacity-[33%] text-[20px]`}>
                    {student.npm_mahasiswa || "2231XXX"}
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
            <h1 className={`${rethink_sans.className} font-bold text-[32px]`}>Personal Information</h1>
            <div className="flex flex-col mt-[15px]">
              <h1 className={`${rethink_sans.className} text-[20px] mt-[15px] text-#000000 opacity-[33%]`}>Name</h1>
              <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
                {student.nama_mahasiswa || "xxx"}
              </h1>

              <h1 className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}>Major</h1>
              <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
                {student.prodi_mahasiswa || "xx"}
              </h1>

              <h1 className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}>IPK</h1>
              <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
                {student.ipk_mahasiswa }
              </h1>
            </div>
          </div>

          {/* Right Side Information */}
          <div className="col-span-1 mt-[91px] mr-[148px]">
           
                <h1 className={`${rethink_sans.className} text-[20px] mt-[15px] text-#000000 opacity-[33%]`}>
              Total SKS 
            </h1>
            <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
              {144}
            </h1>

            <h1 className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}>
              SKS
            </h1>
            <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
              {totalsks}
            </h1>
                

            <h1 className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}>
              Selisih SKS
            </h1>
            <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
              {144 - totalsks}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

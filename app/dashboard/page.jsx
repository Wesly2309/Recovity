"use client";

import { reemkufiink, rethink_sans, roboto } from "../../libs/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HalamanDashboard() {
  const router = useRouter();
  const [students, setStudents] = useState(null);
  const [totalsks, setTotalSKS] = useState(0);

  // State to store fetched API data and loading status
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");
  const [npm, setNpm] = useState("");
  const [status, setStatus] = useState("");
  const [student, setStudent] = useState({});
  const [activities, setActivities] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subjectinterset, setSubjectInterest] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State untuk menyimpan index card yang sedang di-hover

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the index when the card is hovered
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset when the mouse leaves the card
  };

  const fetchStudentInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/get_detail_student_data",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your valid JWT token
          },
        }
      );

      if (response.data.success) {
        setStudent(response.data.data.student);
        setTotalSKS(Number(response.data.data.info.sks));
      } else {
        console.log("Failed to fetch data:", response.data.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const fetchStudentData = async () => {
    try {
      const token = localStorage.getItem("token");
      setLoading(true);
      const res = await axios.get("http://localhost:5000/get_student_data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setLoading(false);
        console.log(res);
        setNama(res.data.data.nama_mahasiswa);
        setProdi(res.data.data.prodi_mahasiswa);
        setNpm(res.data.data.npm_mahasiswa);
        setStatus(res.data.data.status_mahasiswa);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchSubjectInterest = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/webinar", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data.data);
      // setSubjectInterest(res.data.data.)
    } catch (err) {
      console.log(err);
    }
  };

  const fetchActivities = async () => {
    try {
      const response = await fetch("http://localhost:5000/activities");
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const result = await response.json();
      if (result.status && result.data) {
        setActivities(result.data);
      }
    } catch (error) {
      console.log("Failed to fetch activities:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecommendations = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/recommendations",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        setRecommendations(response.data.recommendations);
      }
    } catch (error) {
      console.log("Failed to fetch recommendations:", error);
    }
  };
  const convertToItalic = (text) => {
    return text.replace(
      /<i>(.*?)<\/i>/g,
      '<span style="font-style: italic;">$1</span>'
    );
  };

  // Call the fetch functions when the component mounts
  useEffect(() => {
    fetchActivities();
    fetchRecommendations();
    fetchStudentData();
    fetchStudentInfo();
    fetchSubjectInterest();
  }, []);

  const handleClickProfile = () => router.push("/dashboard/profile");

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1
          className={`${rethink_sans.className} mt-[18px] ml-[30px] text-[36px]`}
        >
          Welcome, {loading ? "Loading..." : nama}!
        </h1>

        <div className="flex items-center mt-[14px]">
          <div className="w-16 h-14 ml-2 rounded-full bg-white flex items-center justify-center">
            <button onClick={handleClickProfile}></button>
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

      {/* Recommended Section */}
      <h1
        className={`${rethink_sans.className} underline mt-28 font-bold uppercase text-black text-center text-3xl`}
      >
        Recommended Based On Your Interest
      </h1>

      <div className="flex justify-center items-center mt-[22px] px-4 sm:px-6 md:px-8">
        {/* Left Arrow */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
          {loading ? (
            <p>Loading recommendations...</p>
          ) : recommendations.length > 0 ? (
            recommendations.map((recommendation, index) => {
              // Limit text length to a max of 30 characters for example
              const limitedText =
                hoveredIndex === index
                  ? recommendation.relevant_activities[0] // Show full text when hovered
                  : recommendation.relevant_activities[0].length > 30
                  ? recommendation.relevant_activities[0].slice(0, 30) + "..." // Show shortened text otherwise
                  : recommendation.relevant_activities[0];

              return (
                <div
                  key={index}
                  className="w-[225px] sm:w-[200px] md:w-[225px] h-[120px] p-3 rounded-[10px] bg-blue4 text-white flex flex-col items-center justify-center"
                  onMouseEnter={() => handleMouseEnter(index)} // Show full text on hover
                  onMouseLeave={handleMouseLeave} // Reset text on mouse leave
                >
                  <span
                    className={`${roboto.className} text-[11px] sm:text-[12px] font-bold text-center`}
                  >
                    {recommendation.kategori}
                  </span>
                  <div className="w-[134px] h-[1px] bg-white mt-[6px] mb-[6px]"></div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: convertToItalic(limitedText),
                    }}
                    className={`${roboto.className} text-[9px] sm:text-[10px] font-bold text-white text-center`}
                    style={{
                      transition: "all 0.3s ease", // Smooth transition for text change
                      maxHeight: hoveredIndex === index ? "none" : "3em", // Allow full text to show on hover
                      overflow: hoveredIndex === index ? "visible" : "hidden", // Ensure no overflow when not hovered
                      whiteSpace: hoveredIndex === index ? "normal" : "nowrap", // Wrap text on hover
                      textOverflow: "ellipsis", // Apply ellipsis when not hovered
                    }}
                  />
                </div>
              );
            })
          ) : (
            <p>No recommendations available.</p>
          )}
        </div>
      </div>

      {/* Profile Section */}
      <h1
        className={`${rethink_sans.className} underline mt-[38px] font-bold uppercase text-black text-center text-[24px]`}
      >
        {nama}'s PROFILE
      </h1>
      {/* Personal Information Section */}
      <div className="flex border border-black/30 shadow-md md:my-[20px] my-[80px]  h-[580px] mx-[30px] rounded-[15px]">
        <div className="grid grid-cols-2 gap-20">
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
              <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
                {student.nama_mahasiswa || "xxx"}
              </h1>

              <h1
                className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
              >
                Major
              </h1>
              <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
                {student.prodi_mahasiswa || "xx"}
              </h1>

              <h1
                className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
              >
                IPK
              </h1>
              <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
                {student.ipk_mahasiswa}
              </h1>

              <h1
                className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
              >
                NPM
              </h1>
              <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
                {student.npm_mahasiswa || "xxx"}
              </h1>
            </div>
          </div>

          {/* Right Side Information */}
          <div className="col-span-1 mt-[91px] mr-[148px]">
            <h1
              className={`${rethink_sans.className} text-[20px] mt-[15px] text-#000000 opacity-[33%]`}
            >
              Total SKS
            </h1>
            <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
              {144}
            </h1>

            <h1
              className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
            >
              SKS
            </h1>
            <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
              {totalsks}
            </h1>

            <h1
              className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
            >
              Selisih SKS
            </h1>
            <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
              {144 - totalsks}
            </h1>
            <h1
              className={`${rethink_sans.className} text-[20px] mt-[52px] text-#000000 opacity-[33%]`}
            >
              Student Status
            </h1>
            <h1 className={`${rethink_sans.className} mt-[5px] text-[20px]`}>
              {student.status_mahasiswa || "xxx"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

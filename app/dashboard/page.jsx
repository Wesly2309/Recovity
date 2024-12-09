'use client';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { reemkufiink, rethink_sans, roboto } from "../../libs/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HalamanDashboard() {
  const router = useRouter();

  // State to store fetched API data and loading status
  const [nama, setNama] = useState('');
  const [prodi, setProdi] = useState('');
  const [activities, setActivities] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State untuk menyimpan index card yang sedang di-hover

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the index when the card is hovered
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset when the mouse leaves the card
  };

  
  const fetchStudentData = async () => {
    try {
      const token = localStorage.getItem('token');
      setLoading(true);
      const res = await axios.get('http://localhost:5000/get_student_data', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      if (res) {
        setLoading(false);
        console.log(res);
        setNama(res.data.data.nama_mahasiswa);
        setProdi(res.data.data.prodi_mahasiswa);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchActivities = async () => {
    try {
      const response = await fetch('http://localhost:5000/activities');
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
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/recommendations', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      const data = await response.json();
      if (data && data.recommendations) {
        setRecommendations(data.recommendations);
      }
    } catch (error) {
      console.log("Failed to fetch recommendations:", error);
    }
  };
  const convertToItalic = (text) => {
    return text.replace(/<i>(.*?)<\/i>/g, '<span style="font-style: italic;">$1</span>');
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  // Call the fetch functions when the component mounts
  useEffect(() => {
    fetchActivities();
    fetchRecommendations();
    fetchStudentData();
  }, []);

  const handleClickProfile = () => router.push("/dashboard/profile");

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className={`${rethink_sans.className} mt-[18px] ml-[30px] text-[36px]`}>
          Welcome, {loading ? "Loading..." : nama}!
        </h1>

        <div className="flex items-center mt-[14px]">
          <div className="w-16 h-14 ml-2 rounded-full bg-white flex items-center justify-center">
            <button onClick={handleClickProfile}>
              <Image
                src={"/kimjiwon.jpeg"}
                alt="Profile Picture"
                width={50}
                height={50}
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Recommendation Prompt */}
      <div className="mt-[5px] ml-[30px] flex items-center">
        <img src="/track-and-stop.svg" alt="Track and Stop" width={66} height={12} />
        <span className={`${rethink_sans.className} ml-[8px] mt-[1px] text-[16px] underline`}>
          Ready to get your recommendations?
        </span>
      </div>

      {/* Recommended Section */}
      <h1 className={`${rethink_sans.className} underline mt-28 font-bold uppercase text-black text-center text-3xl`}>
        Recommended Based On Your Interest
      </h1>

      <div className="flex justify-center items-center mt-[12px] px-4 sm:px-6 md:px-8">
      {/* Left Arrow */}
      <ArrowLeftCircleIcon className="text-black" onClick={handleLeftClick} />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
        {loading ? (
          <p>Loading recommendations...</p>
        ) : recommendations.length > 0 ? (
          recommendations.map((recommendation, index) => {
            // Limit text length to a max of 30 characters for example
            const limitedText = hoveredIndex === index 
              ? recommendation.relevant_activities[0]  // Show full text when hovered
              : recommendation.relevant_activities[0].length > 30
              ? recommendation.relevant_activities[0].slice(0, 30) + '...' // Show shortened text otherwise
              : recommendation.relevant_activities[0];

            return (
              <div
                key={index}
                className="w-[225px] sm:w-[200px] md:w-[225px] h-[120px] p-3 rounded-[10px] bg-blue4 text-white flex flex-col items-center justify-center"
                onMouseEnter={() => handleMouseEnter(index)} // Show full text on hover
                onMouseLeave={handleMouseLeave} // Reset text on mouse leave
              >
                <span className={`${roboto.className} text-[11px] sm:text-[12px] font-bold text-center`}>
                  {recommendation.kategori}
                </span>
                <div className="w-[134px] h-[1px] bg-white mt-[6px] mb-[6px]"></div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: convertToItalic(limitedText)
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

      {/* Right Arrow */}
      <ArrowRightCircleIcon className="text-black" onClick={handleRightClick} />
    </div>

      {/* Profile Section */}
      <h1 className={`${rethink_sans.className} underline mt-[38px] font-bold uppercase text-black text-center text-[24px]`}>
        {nama}'s PROFILE
      </h1>
      {/* Profile Picture */}
      <div className="flex border border-black/30 mt-5 mb-[38px] shadow-md h-[301px] w-[780px] mx-[40px] rounded-[21px]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <Image
                    src={"/kimjiwon.jpeg"}
                    alt="Profile Picture"
                    width={135}
                    height={135}
                    className="rounded-full ml-[35px] mt-[40px]"
                  />
                </div>
                <h1 className={`${reemkufiink.className} text-[30px] mt-2 text-black/65 ml-[34px]`}>
                  STUDENT
                </h1>
                <p className={`${rethink_sans.className} text-black opacity-[0.4] ml-[30px] font-bold text-center text-[14px]`}>
                  {prodi}
                </p>
              </div>
              <div className="border border-black mt-[15px] ml-[20px] h-64"></div>
            </div>
          </div>
          <div className="col-span-2 mt-[21px] ml-[35px]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className={`${roboto.className} text-center font-bold`}>
                  SUBJECT INTEREST
                </h1>
                <div className="bg-blue4 drop-shadow-lg w-[191px] h-[221px] rounded-[21px]">
                  <div className="flex flex-col mt-[34px] space-y-6">
                    <p className={`${roboto.className} font-extrabold text-lg text-center text-white`}>
                      Animasi 2D
                    </p>
                    <p className={`${roboto.className} font-extrabold text-lg text-center text-white`}>
                      Machine Learning
                    </p>
                    <p className={`${roboto.className} font-extrabold text-lg text-center text-white`}>
                      Pemograman Web
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[30px] ">
                <h1 className={`${roboto.className} font-bold text-[16px] text-center`}>
                  MAJOR
                </h1>
                <div className="w-[191px] h-[38px] bg-blue4 flex justify-center items-center rounded-[21px] drop-shadow-lg ml-[30px]">
                  <p className={`${roboto.className} font-bold text-white`}>
                    {prodi}
                  </p>
                </div>

                <h1 className={`${roboto.className} font-bold text-[16px] ml-[38px] text-center mt-[9px]`}>
                  BUDGET ESTIMATION
                </h1>
                <div className="w-[191px] h-[38px] bg-blue4 flex justify-center items-center rounded-[21px] drop-shadow-lg ml-[30px]">
                  <p className={`${roboto.className} font-bold text-white`}>
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

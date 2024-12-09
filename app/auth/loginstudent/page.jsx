"use client";
import Link from "next/link";
import { rethink_sans } from "../../../libs/fonts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function HalamanLoginStudent() {
  const router = useRouter();

  const [npm, setNpm] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        npm_mahasiswa: npm,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Login failed!");
    }
  };

  return (
    <>
      <div className="mt-[138px] ml-[43px] text-[36px]">
        <h1 className="font-bold">LOGIN</h1>
        <hr className="border-2 border-blue1 mt-[9px] w-[439px]" />
        <p className={` ${rethink_sans.className} mt-[3px] text-[16px]`}>
          Login with your university account.
        </p>
        <div className="mt-[46px]">
          {/* Input Fields */}
          <form method="POST" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <label className="text-[16px]" htmlFor="NPM">
                Nomor Pokok Mahasiswa (NPM)
              </label>
              <input
                id="NPM"
                className="rounded-[11px] border-gray-400 h-[46px] w-[438px] border mt-[5px] px-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue1"
                type="text"
                placeholder="Enter your NPM"
                value={npm}
                onChange={(e) => setNpm(e.target.value)}
              />
            </div>
            <div className="mt-[37px]">
              <div className="flex flex-col">
                <label className="text-[16px]" htmlFor="Password">
                  Password
                </label>
                <input
                  id="Password"
                  className="rounded-[11px] border-gray-400 h-[46px] w-[438px] border mt-[5px] px-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue1"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-14 flex flex-col max-w-[438px]">
                <button
                  type="submit"
                  className={` ${rethink_sans.className} font-semibold text-[20px] w-[438px] h-[48px] bg-blue1 text-center text-white rounded-[13px] hover:bg-blue-600 transition-all`}
                >
                  Login
                </button>
              </div>
              <div className="text-center">
                <Link
                  href={"/help"}
                  className={`${rethink_sans.className} font-normal text-[16px] text-blue1 underline hover:text-blue-600`}
                >
                  Need help?
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Error Message */}
        {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

        {/* Login Button */}
      </div>
    </>
  );
}

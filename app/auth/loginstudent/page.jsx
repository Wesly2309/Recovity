'use client'
import Link from "next/link";
import { rethink_sans } from "../../../libs/fonts";
import { useRouter } from "next/navigation";


export default function HalamanLoginStudent(){
  
  const router = useRouter()

  const handleClick = () => {
    router.push('/dashboard')
  }



  return (
    <>
    <div className="mt-[138px] ml-[43px] text-[36px]">
      <h1>LOGIN</h1>
      <hr className="border-2 border-line mt-[9px] w-[439px]"/>
      <p className={` ${rethink_sans.className} mt-[3px] text-[16px]`}>Login with your university account.</p>
    <div className="mt-[46px]">
      {/* <form > */}
        <div className="flex flex-col">
          <label className="text-[16px]" htmlFor="NPM">Nomor Pokok Mahasiswa (NPM)</label>
          <input className="rounded-[11px] border-black h-[46px] w-[438px] border mt-[5px]" type="text" />
        </div>
        <div className="mt-[37px]">
    <div className="flex flex-col">
      <label className="text-[16px]" htmlFor="Password">Password</label>
      <input className="rounded-[11px] border-black h-[46px] w-[438px] border mt-[5px]" type="text" />
    </div>
    </div>

    <div className="mt-14 flex flex-col max-w-[438px] ">
      <button onClick={handleClick} className={` ${rethink_sans.className} font-semibold text-2xl w-[438px] h-[48px] bg-blue1 text-center text-white rounded-[13px] `}>
        Login
      </button>

     <div className="text-center">
     <Link href={'/help'} className={ ` ${rethink_sans.className}    font-normal mt-[22px] text-base underline `}>Need help?</Link>
     </div>
    </div>
      {/* </form> */}
    </div>
    </div>
    </>
  )
}
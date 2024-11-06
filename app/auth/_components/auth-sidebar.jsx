import Image from "next/image";

export default function AuthSidebar () {
  return (
    <div className="bg-primary   ">
    <div className="flex flex-col">
      <Image
        src="/Logo.png"
        width={394}
        height={374}
        alt="logo"
        className="mx-auto "
      />
      <h1 className="text-white text-6xl text-center font-bold relative">
        <span className="text-green1">RECOVITY</span>
        <span className="absolute inset-0 text-white translate-x-1 translate-y-1">
          RECOVITY
        </span>
      </h1>
      <p className="text-white mx-auto text-center mt-9 text-xl leading-relaxed  tracking-[0.1em]  w-[px]">
        Recovity is a mobile app that <br /> helps students to find
        activities <br /> inline with their subject interest, major and
        budget.
      </p>
    </div>
  </div>
  )
}
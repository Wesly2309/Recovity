"use client";

import AuthSidebar from "./_components/auth-sidebar";

export default function AuthLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  min-h-screen ">
      <AuthSidebar />
      <div className="">{children}</div>
    </div>
  );
}

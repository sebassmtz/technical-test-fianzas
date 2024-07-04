import React from "react";
import NavBarDash from "./_components/navbar";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full flex flex-col gap-y-10 items-center justify-center
  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-gray-800
  "
    >
      <NavBarDash />
      {children}
    </div>
  );
}

export default ProtectedLayout;

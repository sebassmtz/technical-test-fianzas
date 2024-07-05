"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "sonner";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export function LogoutButton({ children }: LogoutButtonProps) {
  const router = useRouter();

  const onClick = () => {
    signOut({ redirect: false });
    Cookies.remove("access_token");
    router.push("/");
    toast.success("Sesion cerrada con exito");
  };
  return (
    <span
      className="cursor-pointer"
      onClick={onClick}
    >
      {children}
    </span>
  );
}

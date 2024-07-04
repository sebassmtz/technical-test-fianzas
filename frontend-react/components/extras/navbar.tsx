"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function NavBarMain() {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex  flex-row justify-between items-center p-4 w-[600px] shadow-sm rounded-xl">
      <div className=" flex justify-between items-center w-full">
        <Button
          asChild
          variant={pathname === "/auth/signIn" ? "default" : "outline"}
        >
          <Link href={"/auth/signIn"}>Login</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/auth/signUp" ? "default" : "outline"}
        >
          <Link href={"/auth/signUp"}>Registro</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/public/products" ? "default" : "outline"}
        >
          <Link href={"/public/products"}>Productos</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/public/users" ? "default" : "outline"}
        >
          <Link href={"/public/users"}>Usuarios</Link>
        </Button>
      </div>
    </nav>
  );
}

export default NavBarMain;

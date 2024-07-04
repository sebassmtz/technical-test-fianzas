"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/auth/user-button";

function NavBarDash() {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 w-[600px] shadow-sm rounded-xl">
      <div className="flex gap-2">
        <Button
          asChild
          variant={pathname === "/dashboard/products" ? "default" : "outline"}
        >
          <Link href={"/dashboard/products"}>Productos</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/dashboard/orders" ? "default" : "outline"}
        >
          <Link href={"/dashboard/orders"}>Ordenes</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/dashboard/users" ? "default" : "outline"}
        >
          <Link href={"/dashboard/users"}>Usuarios</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
}

export default NavBarDash;

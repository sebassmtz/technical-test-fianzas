"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function DashboardPage() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (session) {
    Cookies.set("access_token", session?.user?.token);
  }

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Pagina Principal</p>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <div className="w-full space-y-2 flex flex-col ">
          <Button
            size={"lg"}
            asChild
            variant={pathname === "/dashboard" ? "default" : "outline"}
            className="w-full sm:w-auto  p-4"
          >
            <Link href={"/dashboard"}>Home</Link>
          </Button>
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
      </CardContent>
    </Card>
  );
}

export default DashboardPage;

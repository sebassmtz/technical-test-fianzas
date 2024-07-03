import React from "react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

function MainPage() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-gray-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Prueba Tecnica Fianzas
        </h1>
        <p className="text-white text-lg">Servicio de Autentificacion</p>
        <div>
          <LoginButton
            mode="redirect"
            asChild
          >
            <Button
              variant="secondary"
              size="lg"
            >
              Iniciar Sesion
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

export default MainPage;

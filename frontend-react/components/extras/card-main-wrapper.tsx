"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Header } from "@/components/auth/header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  footerLabel: string
}

export const CardWrapperMain = ({ children, headerLabel , footerLabel}: CardWrapperProps) => {
  return (
    <Card className="w-full sm:w-[700px] shadow-md mx-2">
      <CardHeader>
        <Header label={headerLabel}
         />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="text-center justify-center">
      <p className="text-muted-foreground text-sm">{footerLabel}</p>
      </CardFooter>
    </Card>
  );
};

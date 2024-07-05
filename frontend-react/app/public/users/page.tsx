"use client";
import { CardWrapperMain } from "@/components/extras/card-main-wrapper";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/actions/users";
import { TablePreviewUser } from "@/components/extras/table-users";
import dynamic from "next/dynamic";

// import { GridLoader } from "react-spinners";
const GridLoader = dynamic(
  () => import("react-spinners").then((mod) => mod.GridLoader),
  { ssr: false }
);

function UsersPage() {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return (
    <CardWrapperMain
      headerLabel=""
      footerLabel="Fianzas"
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <GridLoader
            className="flex justify-center items-center"
            color="#000"
            size={80}
          />
        </div>
      ) : (
        <div className="flex flex-col space-y-2 w-full items-center justify-center overflow-y-auto max-h-[40vh] h-[70vh]">
          <TablePreviewUser data={users ?? []} />
        </div>
      )}
      {error && <div>error.message</div>}
    </CardWrapperMain>
  );
}

export default UsersPage;

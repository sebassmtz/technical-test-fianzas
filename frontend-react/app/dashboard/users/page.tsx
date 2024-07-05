"use client";
import React from "react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/actions/users";
import { TablePreviewUser } from "@/components/extras/table-users";

function UserPageDash() {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return (
    <Card className="w-[800px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Usuarios</p>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <div className="overflow-y-auto max-h-[40vh] h-[70vh]">
          <TablePreviewUser data={users ?? []} />
        </div>
      </CardContent>
    </Card>
  );
}

export default UserPageDash;

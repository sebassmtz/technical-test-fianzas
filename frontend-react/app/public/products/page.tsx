"use client";
import { CardWrapperMain } from "@/components/extras/card-main-wrapper";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/actions/products";
import { GridLoader } from "react-spinners";
import { Table } from "lucide-react";
import { TablePreviewProducts } from "@/components/extras/table-products";

function ProductsPage() {
  // Queries
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <CardWrapperMain
      headerLabel=""
      footerLabel="Fianzas"
    >
      {isLoading  ? (
        <div className="flex justify-center items-center">
          <GridLoader
            className="flex justify-center items-center"
            color="#000"
            size={80}
          />
        </div>
      ) : (
        <TablePreviewProducts data={product ?? []} />
      )}
      {error && <div>error.message</div>}
    </CardWrapperMain>
  );
}

export default ProductsPage;

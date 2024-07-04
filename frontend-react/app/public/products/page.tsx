"use client";
import { CardWrapperMain } from "@/components/extras/card-main-wrapper";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/actions/products";
import { GridLoader } from "react-spinners";

function ProductsPage() {
  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("Data",data);

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
        <div>Ya cargo los Productos</div>
      )}
    </CardWrapperMain>
  );
}

export default ProductsPage;

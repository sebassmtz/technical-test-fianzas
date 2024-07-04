"use client";
import React from "react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TablePreviewProducts } from "@/components/extras/table-products";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/actions/products";
function ProductPageDash() {
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  return (
    <Card className="w-[800px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Productos</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-center rounded-lg border p-3 shadow-md">
          <Button>Agregar Producto</Button>
        </div>
        {error && <div>error.message</div>}
        {isLoading ? (
          <div className="justify-center items-center flex w-full h-full">
            Cargando ...
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[40vh] h-[70vh]">
            <TablePreviewProducts
              data={product ?? []}
              showActions
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ProductPageDash;

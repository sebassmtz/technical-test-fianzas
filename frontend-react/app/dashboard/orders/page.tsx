"use client";
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "@/actions/orders";

function OrdersPageDash() {
  const {
    isLoading,
    error,
    data: orders,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Ordenes</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && <div>{error.message}</div>}
        {isLoading ? (
          <div>Cargando...</div>
        ) : (
          <div className="overflow-y-auto max-h-[40vh] h-[70vh]">
            {orders &&
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white shadow-md rounded-lg p-4"
                >
                  <h2 className="text-xl font-bold">Orden ID: {order.id}</h2>
                  <p>
                    Fecha de venta: {new Date(order.date_sale).toLocaleString()}
                  </p>
                  <p>Entregado: {order.is_delivered ? "Sí" : "No"}</p>
                  <p>Precio de entrega: ${order.price_delivery}</p>
                  <p>Precio total: ${order.price_total}</p>
                  {order.orderProduct.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Productos:</h3>
                      {order.orderProduct.map((product) => (
                        <div
                          key={product.id}
                          className="mt-2"
                        >
                          <p>Producto: {product.product.name}</p>
                          <p>Cantidad: {product.quantity}</p>
                          <p>Comentario: {product.comment}</p>
                          <p>Precio: ${product.product.price}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default OrdersPageDash;

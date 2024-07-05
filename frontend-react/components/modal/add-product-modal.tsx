"use client";
import React, { useTransition, useState } from "react";
import { Modal } from "@/components/ui/modal";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AddProductSchema } from "@/schemas";
import { useStoreAddModal } from "@/hooks/use-store-modal";
import { Switch } from "@/components/ui/switch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "@/actions/products";
import { toast } from "sonner";

function AddProductModal() {
  const queryClient = useQueryClient();
  const { isOpen, close } = useStoreAddModal((state) => ({
    isOpen: state.isOpen,
    close: state.close,
  }));

  const form = useForm<z.infer<typeof AddProductSchema>>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      availability: false,
    },
  });


  const { isPending, mutate } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Producto agregado correctamente.");
      form.reset();
      close();
    },
  });

  const onSubmit = (values: z.infer<typeof AddProductSchema>) => {
    const formattedValues = {
      ...values,
      price: Number(values.price),
    };
    mutate(formattedValues);
  };

  return (
    <Modal
      title="Agregar Producto"
      description="Agrega un nuevo producto a la tienda."
      isOpen={isOpen}
      onClose={close}
    >
      <Form {...form}>
        <form
          className="space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="producto"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripcion</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Descripcion..."
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                  <div className="space-y-0.5">
                    <FormLabel>Disponibilidad</FormLabel>
                    <FormDescription>
                      Activar o desactivar la disponibilidad del producto.
                    </FormDescription>
                  </div>

                  <FormControl>
                    <Switch
                      disabled={isPending}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
          >
            Agregar
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default AddProductModal;

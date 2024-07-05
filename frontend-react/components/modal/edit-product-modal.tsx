"use client";
import React, { useTransition, useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import {
  useStoreEditModal,
  useStoreEditProduct,
} from "@/hooks/use-store-modal";
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
import { FormError } from "@/components/extras/form-error";
import { FormSucess } from "@/components/extras/form-sucess";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { EditProductSchema } from "@/schemas";

function EditProductModal() {
  const [isPending, startTransition] = useTransition();

  const { isOpen, close } = useStoreEditModal((state) => ({
    isOpen: state.isOpen,
    close: state.close,
  }));

  const { productStore, setProductStore } = useStoreEditProduct((state) => ({
    productStore: state.productStore,
    setProductStore: state.setProductStore,
  }));

  const form = useForm<z.infer<typeof EditProductSchema>>({
    resolver: zodResolver(EditProductSchema),
    defaultValues: {
      name: productStore.name || undefined,
      description: productStore.description || undefined,
      price: productStore.price || undefined,
      availability: productStore.availability || undefined,
    },
  });

  useEffect(() => {
    // Reset form values when productStore changes
    form.reset({
      name: productStore.name || "",
      description: productStore.description || "",
      price: productStore.price || 0,
      availability: productStore.availability || false,
    });
  }, [productStore, form]);

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const onSubmit = (values: z.infer<typeof EditProductSchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Editar Producto"
      description="Completa los campos para editar el producto"
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
                      placeholder="producto"
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
          <FormError message={error} />
          <FormSucess message={success} />
          <Button
            type="submit"
            disabled={isPending}
          >
            Actualizar
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default EditProductModal;

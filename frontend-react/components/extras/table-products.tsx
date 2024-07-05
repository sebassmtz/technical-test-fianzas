"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import {
  useStoreEditModal,
  useStoreEditProduct,
} from "@/hooks/use-store-modal";
import { AlertModal } from "@/components/modal/alert-modal";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/actions/products";
import { toast } from "sonner";

interface TablePreviewProps {
  data: Product[];
  showActions?: boolean;
}

export function TablePreviewProducts({ data, showActions }: TablePreviewProps) {
  const queryClient = useQueryClient();
  const { open: openEditModal } = useStoreEditModal((state) => ({
    open: state.open,
  }));

  const { productStore, setProductStore } = useStoreEditProduct((state) => ({
    productStore: state.productStore,
    setProductStore: state.setProductStore,
  }));
  const handleEditProduct = (product: Product) => {
    setProductStore(product);
    openEditModal();
  };

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [idProduct, setIdProduct] = useState<number>(0);

  const handleDeleteProduct = (id: number) => {
    setOpen(true);
    setIdProduct(id);
  };

  const availability = (availability: boolean) => {
    return availability ? "Disponible" : "No disponible";
  };

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Producto eliminado correctamente.");
      setOpen(false);
      setLoading(false);
    }
  })

  const onDelete = () => {
    setLoading(true);
    deleteProductMutation.mutate(idProduct);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <Table>
        <TableCaption>Productos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[100px]">Nombre</TableHead>
            <TableHead>Desc</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Disponibilidad</TableHead>
            {showActions && <TableHead>Acciones</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((dataFile) => (
            <TableRow key={dataFile.id}>
              <TableCell className="font-medium">{dataFile.id}</TableCell>
              <TableCell className="font-medium">{dataFile.name}</TableCell>
              <TableCell>{dataFile.description}</TableCell>
              <TableCell>{dataFile.price}</TableCell>
              <TableCell>{availability(dataFile.availability)}</TableCell>
              {showActions && (
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => handleEditProduct(dataFile)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleDeleteProduct(dataFile.id)}
                      disabled={loading}
                    >
                      Eliminar
                    </Button>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

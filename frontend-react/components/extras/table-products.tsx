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

interface TablePreviewProps {
  data: Product[];
  showActions?: boolean;
}

export function TablePreviewProducts({ data, showActions }: TablePreviewProps) {
  // Agregar el id de la fila y el setID de la fila en zustand
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

  const handleDeleteProduct = (id: number) => {
    console.log(`Delete product with id: ${id}`);
  };

  return (
    <>
      <Table>
        <TableCaption>Productos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[100px]">Nombre</TableHead>
            <TableHead>Desc</TableHead>
            <TableHead>Precio</TableHead>
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
              <TableCell>{dataFile.availability}</TableCell>
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

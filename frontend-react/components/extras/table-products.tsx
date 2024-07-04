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

interface TablePreviewProps {
  data: Product[];
}

export function TablePreviewProducts({ data }: TablePreviewProps) {
  return (
    <Table>
      <TableCaption>
        Una preview del archivo que se le va entregar.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID del Party</TableHead>
          <TableHead>ID de la Receta</TableHead>
          <TableHead>Titulo de la receta</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((dataFile) => (
          <TableRow key={dataFile.id}>
            <TableCell className="font-medium">{dataFile.name}</TableCell>
            <TableCell>{dataFile.description}</TableCell>
            <TableCell>{dataFile.price}</TableCell>
            <TableCell>{dataFile.availability}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

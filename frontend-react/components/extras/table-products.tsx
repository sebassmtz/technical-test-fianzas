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
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead>Desc</TableHead>
          <TableHead>Precio</TableHead>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

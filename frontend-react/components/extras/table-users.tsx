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
import { User } from "@/types/users";

interface TablePreviewProps {
  data: User[];
}

export function TablePreviewUser({ data }: TablePreviewProps) {
  return (
    <Table>
      <TableCaption>Usuarios</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead>Apellido</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Direccion</TableHead>
          <TableHead>Rol</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((dataFile) => (
          <TableRow key={dataFile.id}>
            <TableCell className="font-medium">{dataFile.id}</TableCell>
            <TableCell className="font-medium">{dataFile.name}</TableCell>
            <TableCell>{dataFile.lastName}</TableCell>
            <TableCell>{dataFile.email}</TableCell>
            <TableCell>{dataFile.address}</TableCell>
            <TableCell>{dataFile.rol}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

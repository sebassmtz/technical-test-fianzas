export class CreateUserDto {
  name: string;
  lastName: string;
  email: string;
  password: string;
  address?: string;
  age?: number;
}

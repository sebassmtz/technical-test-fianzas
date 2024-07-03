import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto';

import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'src/users/service/users.service';
import { LoginDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({
    password,
    email,
    name,
    lastName,
    address,
    age,
  }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await this.usersService.create({
      name,
      email,
      lastName,
      address,
      age,
      password: hashedPassword,
    });

    return newUser;
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmailWithPassword(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { email: user.email, role: user.rol };

    const token = await this.jwtService.signAsync(payload);

    return {
      token: token,
      email: user.email,
    };
  }

  async profile(user: ActiveUserInterface) {
    return await this.usersService.findOneByEmail(user.email);
  }
}

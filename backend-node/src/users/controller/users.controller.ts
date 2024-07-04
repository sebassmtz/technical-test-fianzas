import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get user by id',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}

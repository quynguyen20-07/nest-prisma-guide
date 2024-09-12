import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  async createUser(@Body() body: { email: string; name: string }) {
    return this.usersService.createUser(body.email, body.name);
  }
}

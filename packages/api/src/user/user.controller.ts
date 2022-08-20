import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';

import { UserService } from './user.service'

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.users({})
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.user({ id })
  }

  @Post()
  async create(@Body() body: Prisma.UserCreateInput): Promise<User> {
    return this.userService.createUser(body)
  }

  @Patch()
  async update(@Body() body: Prisma.UserUpdateArgs): Promise<User> {
    return this.userService.updateUser(body)
  }

  @Delete()
  async delete(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser({ id })
  }
}

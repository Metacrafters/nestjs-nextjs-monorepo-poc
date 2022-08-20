import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Response,
} from '@nestjs/common';
import { Response as Res } from 'express';
import { User, Prisma } from '@prisma/client';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(@Response() res: Res): Promise<Res> {
    const users = await this.userService.users({});

    return res
      .setHeader('Access-Control-Expose-Headers', 'X-Total-Count')
      .setHeader('X-Total-Count', 1)
      .json(users);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.user({ id });
  }

  @Post()
  async create(@Body() body: Prisma.UserCreateInput): Promise<User> {
    return this.userService.createUser(body);
  }

  @Patch()
  async update(@Body() body: Prisma.UserUpdateArgs): Promise<User> {
    return this.userService.updateUser(body);
  }

  @Delete()
  async delete(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser({ id });
  }
}

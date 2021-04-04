import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from 'src/service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser(): string {
    return this.userService.getAllUser();
  }

  @Post()
  insertUser(username: string): boolean {
    return this.userService.insertUser(username);
  }

  @Put()
  updateUser(): string {
    return this.userService.getAllUser();
  }

  @Delete()
  deleteUser(): string {
    return this.userService.getAllUser();
  }
}

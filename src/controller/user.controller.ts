import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/service/user.service';

@Controller()
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
}

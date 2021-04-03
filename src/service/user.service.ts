import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUser(): string {
    return 'Get User';
  }

  insertUser(username: string): boolean {
    return true;
  }
}

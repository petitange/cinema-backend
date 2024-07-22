import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private readonly users = [
    {
      username: 'admin',
      password: 'admin',
    },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
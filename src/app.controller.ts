import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getProtectedResource() {
    return this.appService.getProtectedResource();
  }
}

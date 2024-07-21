import { Controller, Get } from '@nestjs/common';
import { CinemaService } from './cinema.service';

@Controller()
export class CinemaController {
  constructor(private readonly CinemaService: CinemaService) {}

  @Get()
  getCinemas(): string {
    return this.CinemaService.getCinemas();
  }
}

import { Controller, Get, Param} from '@nestjs/common';
import { AuditoriumService } from './auditorium.service';

@Controller()
export class AuditoriumController {
  constructor(private readonly AuditoriumService: AuditoriumService) {}

  @Get('auditorium/:movieId')
  getMovies(@Param('movieId') movieId): string {
    console.log({ movieId})
    return this.AuditoriumService.getAuditorium(movieId);
  }
}

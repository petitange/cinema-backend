import { Controller, Get, Param} from '@nestjs/common';
import { AuditoriumService } from './auditorium.service';

@Controller()
export class AuditoriumController {
  constructor(private readonly AuditoriumService: AuditoriumService) {}

  @Get('auditorium/:movieId')
  getMovies(@Param('movieId') movieId): string {
    if (!movieId) {
      throw new Error('Missing movie id');
    }
    return this.AuditoriumService.getAuditorium(movieId);
  }
}

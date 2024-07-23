import { Controller, Get, Param} from '@nestjs/common';
import { SeatService } from './seat.service';

@Controller()
export class SeatController {
  constructor(private readonly SeatService: SeatService) {}

  @Get('seats/movie/:movieId/auditorium/:auditoriumId/schedule/:scheduleId')
  getMovies(@Param('movieId') movieId, @Param('auditoriumId') auditoriumId, @Param('scheduleId') scheduleId): string {
    if (!movieId || !auditoriumId || !scheduleId) {
      throw new Error('Missing movie or auditorium id');
    }
    return this.SeatService.getSeat(movieId, auditoriumId, scheduleId);
  }
}

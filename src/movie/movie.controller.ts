import { Controller, Get} from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
  constructor(private readonly MovieService: MovieService) {}

  @Get('movies')
  getMovies(): string {
    return this.MovieService.getMovies();
  }
}

import { Controller, Get} from '@nestjs/common';
import { MovieService } from './movie.service';
import {
  ApiResponse
} from '@nestjs/swagger';
import { Movie } from '../entities/movies.entity'

@Controller()
export class MovieController {
  constructor(private readonly MovieService: MovieService) {}

  @Get('movies')
  @ApiResponse({
    status: 200,
    description: 'The found movies',
    type: Movie,
  })
  getMovies(): any {
    return this.MovieService.getMovies();
  }
}

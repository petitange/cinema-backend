import { Injectable } from '@nestjs/common';
import { movies } from '../mockData'

@Injectable()
export class MovieService {
  getMovies(): any {
    return {
      data: movies
    };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  getMovies(): any {
    return {
      data: [
        {
          id: 1,
          title: 'Intensamente 2',
          language: 'Premium Español',
          poster: 'https://pics.filmaffinity.com/inside_out_2-365634749-mmed.jpg'
        }
      ]
    };
  }
}

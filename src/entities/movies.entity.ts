import { ApiProperty } from '@nestjs/swagger';

export class Movie {
  /**
   * The movie details
   * @example Movie
   */
  id: number

  @ApiProperty({ example: 'Intensamente 2', description: 'The name of a movie' })
  title: string;

  @ApiProperty({
    example: 'Premium Español',
    description: 'The language of the Movie',
  })
  language: string;

  @ApiProperty({
    example: 'https://pics.filmaffinity.com/inside_out_2-365634749-mmed.jpg',
    description: 'Url Image of the Movie',
  })
  poster: string;
}
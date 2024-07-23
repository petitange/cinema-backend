import { Injectable } from '@nestjs/common';
import { auditoriums } from 'src/mockData';

@Injectable()
export class AuditoriumService {
  getAuditorium(movieId: number): any {

    return {
      data: auditoriums[movieId] || []
    };
  }
}

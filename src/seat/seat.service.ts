import { Injectable } from '@nestjs/common';
import { seats } from '../mockData/index';

@Injectable()
export class SeatService {
  getSeat(movieId: string, auditoriumId:string, scheduleId:string): any {

    return {
      data: seats[movieId][auditoriumId][scheduleId] || []
    };
  }
}

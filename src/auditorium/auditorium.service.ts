import { Injectable } from '@nestjs/common';

@Injectable()
export class AuditoriumService {
  getAuditorium(movieId: number): any {

    console.log({movieId})
    const availability = {
      '1': [
        {
          room: 'Sala A',
          times: ['08:05 PM', '5:00 PM', '7:00 PM']
        },
        {
          room: 'Sala B',
          times: ['06:50 PM', '08:30 PM']
        },
        {
          room: 'Sala C',
          times: ['08:05 PM', '5:00 PM', '7:00 PM']
        },
      ]
    };

    return {
      data: availability[movieId] || []
    };
  }
}

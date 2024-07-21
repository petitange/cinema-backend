import { Injectable } from '@nestjs/common';

@Injectable()
export class CinemaService {
  getCinemas(): any {
    return {
      data: [
        {
          name: 'Cine 1',
          id: '1',
          location: 'Location 1'
        }
      ]
    };
  }
}

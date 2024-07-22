import { Injectable } from '@nestjs/common';

@Injectable()
export class CinemaService {
  getCinemas(): any {
    return {
      data: [
        { id: 1, name: 'Sala 1', movies: [{ title: 'Movie 1', time: '14:00' }, { title: 'Movie 2', time: '16:00' }] },
        { id: 2, name: 'Sala 2', movies: [{ title: 'Movie 3', time: '15:00' }, { title: 'Movie 4', time: '17:00' }] },
        // Agrega más salas de cine según sea necesario
      ]
    };
  }
}

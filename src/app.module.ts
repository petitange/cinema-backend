import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { AuditoriumModule } from './auditorium/auditorium.module';
import { SeatModule } from './seat/seat.module';

@Module({
  imports: [
    MovieModule,
    AuthModule,
    AuditoriumModule,
    SeatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

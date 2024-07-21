import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CinemaModule } from './cinema/cinema.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    CinemaModule,
    RouterModule.register([
      {
        path: 'cinema',
        module: CinemaModule,
      },
    ])
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

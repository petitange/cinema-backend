import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AuditoriumController } from './auditorium/auditorium.controller';
import { AuditoriumModule } from './auditorium/auditorium.module';

@Module({
  imports: [
    MovieModule,
    AuthModule,
    AuditoriumModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

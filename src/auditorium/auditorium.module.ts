import { Module } from '@nestjs/common';
import { AuditoriumController } from './auditorium.controller';
import { AuditoriumService } from './auditorium.service';

@Module({
  imports: [],
  controllers: [AuditoriumController],
  providers: [AuditoriumService]
})
export class AuditoriumModule {}

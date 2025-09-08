import { Module } from '@nestjs/common';
import { SiswaModule } from './siswa.module';
@Module({
  imports: [SiswaModule],
})
export class AppModule {}

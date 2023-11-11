import { Module } from '@nestjs/common';
import { AdcController } from './adc.controller';
import { AdcService } from './adc.service';

@Module({
  controllers: [AdcController],
  providers: [AdcService]
})
export class AdcModule {}

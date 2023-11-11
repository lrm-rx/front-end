import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdcModule } from './adc/adc.module';
import { XxxModule } from './xxx/xxx.module';

@Module({
  imports: [AdcModule, XxxModule],
  controllers: [AppController],
  // providers: [AppService],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
  ],
})
export class AppModule {}

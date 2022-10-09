import { Module } from '@nestjs/common';
import { BusinessObjectController } from './controllers/business-object/business-object.controller';

@Module({
  controllers: [BusinessObjectController]
})
export class BusinessObjectModule {}

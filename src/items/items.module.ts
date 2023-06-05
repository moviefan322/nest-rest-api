import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [],
  controllers: [ItemsController, ItemsController],
  providers: [ItemsService, ItemsService],
})
export class AItmesModule {}

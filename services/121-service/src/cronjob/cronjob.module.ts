import { FspModule } from './../programs/fsp/fsp.module';
import { CronjobService } from './cronjob.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { IntersolveBarcodeEntity } from '../programs/fsp/intersolve-barcode.entity';
import { ProgramEntity } from '../programs/program/program.entity';
import { WhatsappModule } from '../notifications/whatsapp/whatsapp.module';
import { IntersolveRequestEntity } from '../programs/fsp/intersolve-request.entity';
import { ConnectionEntity } from '../connection/connection.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      IntersolveBarcodeEntity,
      ProgramEntity,
      IntersolveRequestEntity,
      ConnectionEntity,
    ]),
    WhatsappModule,
    FspModule,
  ],
  providers: [CronjobService],
  controllers: [],
  exports: [CronjobService],
})
export class CronjobModule {}

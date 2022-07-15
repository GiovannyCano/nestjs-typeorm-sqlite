import { Module } from '@nestjs/common';
import { ClientsService } from './services/clients.service';
import { ClientsController } from './controllers/clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './models/client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
  ],
  providers: [ClientsService],
  controllers: [ClientsController]
})
export class ClientsModule { }

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client.entity';


@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {
  }

  @Get()
  index(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Post('create')
  async create(@Body() clientData: Client): Promise<any> {
    return this.clientsService.create(clientData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() clientData: Client): Promise<any> {
    clientData.id = Number(id);
    console.log('Update #' + clientData.id)
    return this.clientsService.update(clientData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.clientsService.delete(id);
  }

}

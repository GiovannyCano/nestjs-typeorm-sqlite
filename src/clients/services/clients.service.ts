import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../models/client.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ClientsService {

  constructor(@InjectRepository(Client)
  private clientRepository: Repository<Client>) {
  }

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async create(client: Client): Promise<Client> {
    return await this.clientRepository.save(client);
  }

  async update(client: Client): Promise<UpdateResult> {
    return await this.clientRepository.update(client.id, client);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.clientRepository.delete(id);
  }
}

import { Repository } from 'typeorm';
import { Client } from '../models/client.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class ClientsService {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    findAll(): Promise<Client[]>;
    create(client: Client): Promise<Client>;
    update(client: Client): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}

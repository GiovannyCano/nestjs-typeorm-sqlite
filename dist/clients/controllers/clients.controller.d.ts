import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client.entity';
export declare class ClientsController {
    private clientsService;
    constructor(clientsService: ClientsService);
    index(): Promise<Client[]>;
    create(clientData: Client): Promise<any>;
    update(id: any, clientData: Client): Promise<any>;
    delete(id: any): Promise<any>;
}

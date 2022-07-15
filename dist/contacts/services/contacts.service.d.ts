import { Repository } from 'typeorm';
import { Contact } from '../models/contact.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class ContactsService {
    private contactRepository;
    constructor(contactRepository: Repository<Contact>);
    findAll(): Promise<Contact[]>;
    create(contact: Contact): Promise<Contact>;
    update(contact: Contact): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}

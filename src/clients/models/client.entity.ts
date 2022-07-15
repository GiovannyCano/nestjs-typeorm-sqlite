import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: string;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  profession: string;

  @Column()
  incomes: string;
}
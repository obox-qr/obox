import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tenant {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  userId!: string;
}

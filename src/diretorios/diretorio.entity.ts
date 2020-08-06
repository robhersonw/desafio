import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class diretorio {

  @PrimaryGeneratedColumn()
  public idNo: number;

  @Column()
  public Nome: string;

  @Column()
  public isRoot: boolean;

  @Column()
  public noPai: number;


}
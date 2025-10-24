import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('direccion')
export class Direccion {
  @PrimaryGeneratedColumn()
  id_direccion: number;

  @Column({ length: 50 })
  departamento: string;

  @Column({ length: 50 })
  ciudad: string;

  @Column({ length: 50 })
  comuna: string;

  @Column({ length: 50 })
  barrio: string;

  @Column({ length: 50 })
  nomenclatura: string;
}
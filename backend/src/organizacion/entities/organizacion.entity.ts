import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Direccion } from './direccion.entity';

@Entity('organizacion')
export class Organizacion {
  @PrimaryGeneratedColumn()
  id_organizacion: number;

  @Column()
  id_direccion: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ type: 'integer' })
  telefono: number;

  // Relación con Direccion
  @OneToOne(() => Direccion, { eager: true })
  @JoinColumn({ name: 'id_direccion' })
  direccion: Direccion;
}
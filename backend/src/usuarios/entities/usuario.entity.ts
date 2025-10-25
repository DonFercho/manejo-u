import { organizacion } from 'src/organizacion/entities/organizacion.entity';
import { Entity, Column, PrimaryGeneratedColumn , CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
export enum Rol{
  ADMIN = 'ADMIN',
  USER = 'usuario',
}

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  id_organizacion: number;

  @Column({length: 10})
  documento: number;

  @Column({ length: 100 })
  nombre1: string;

   @Column({ length: 100 })
  nombre2: string;

   @Column({ length: 100 })
  apellido1: string;

   @Column({ length: 100 })
  apellido2: string;

   @Column({ length: 15 })
  telefono: number;

   @Column({type: 'enum',enum: Rol,default: Rol.USER,})
  rol: Rol;

  @Column({ unique: true })
  correo: string;

   @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

   @UpdateDateColumn({ type: 'datetime' })
  updatedAt: Date;

  @Column({ default: true })
  activo: boolean;

    // Relación con organizacion
  @ManyToOne(() => organizacion, { eager: true })
  @JoinColumn({ name: 'id_organizacion' })
  direccion: organizacion;
}


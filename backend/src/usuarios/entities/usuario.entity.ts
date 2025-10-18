import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  id_organizacion: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  contraseña: string;

  @Column({ default: true })
  activo: boolean;
}

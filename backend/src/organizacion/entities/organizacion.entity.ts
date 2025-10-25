import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity('organizacion')
export class organizacion {
  @PrimaryGeneratedColumn()
  id_organizacion: number;

  @Column({ length: 255 })
  direccion: string;

  @Column({ length: 255 })
  nombre: string;

  @Column()
  telefono: number;

  // Relación inversa con usuarios
  @OneToMany(() => Usuario, (usuario) => usuario.id_organizacion)
  usuarios: Usuario[];
}
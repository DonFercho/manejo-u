import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuariosRepository.find();
  }

  findOne(id: number) {
    return this.usuariosRepository.findOneBy({ id });
  }

  create(data: Partial<Usuario>) {
    const usuario = this.usuariosRepository.create(data);
    return this.usuariosRepository.save(usuario);
  }

  async update(id: number, data: Partial<Usuario>) {
    await this.usuariosRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.usuariosRepository.delete(id);
    return { deleted: true };
  }
}

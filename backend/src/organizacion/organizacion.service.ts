import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizacion } from './entities/organizacion.entity';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';

@Injectable()
export class OrganizacionService {
  constructor(
    @InjectRepository(Organizacion)
    private organizacionRepository: Repository<Organizacion>,
  ) {}

  async findAll() {
    return this.organizacionRepository.find();
  }

  async findOne(id: number) {
    return this.organizacionRepository.findOne({ where: { id_organizacion: id } });
  }

  async create(createDto: CreateOrganizacionDto) {
    // Crear organización usando el campo 'direccion' como string
    const organizacion = this.organizacionRepository.create({
      nombre: createDto.nombre,
      telefono: createDto.telefono,
      direccion: createDto.direccion,
    });

    return this.organizacionRepository.save(organizacion);
  }

  async update(id: number, updateDto: UpdateOrganizacionDto) {
    const organizacion = await this.findOne(id);
    
    if (!organizacion) {
      throw new Error('Organización no encontrada');
    }
  // Actualizar organización (se actualizan los campos presentes en el DTO)
  await this.organizacionRepository.update(id, updateDto as any);

    return this.findOne(id);
  }

  async remove(id: number) {
    const organizacion = await this.findOne(id);
    
    if (!organizacion) {
      throw new Error('Organización no encontrada');
    }

    // Eliminar organización
    await this.organizacionRepository.delete(id);
    return { deleted: true };
  }
}
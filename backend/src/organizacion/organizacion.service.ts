import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizacion } from './entities/organizacion.entity';
import { Direccion } from './entities/direccion.entity';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';

@Injectable()
export class OrganizacionService {
  constructor(
    @InjectRepository(Organizacion)
    private organizacionRepository: Repository<Organizacion>,
    @InjectRepository(Direccion)
    private direccionRepository: Repository<Direccion>,
  ) {}

  async findAll() {
    return this.organizacionRepository.find({
      relations: ['direccion'],
    });
  }

  async findOne(id: number) {
    return this.organizacionRepository.findOne({
      where: { id_organizacion: id },
      relations: ['direccion'],
    });
  }

  async create(createDto: CreateOrganizacionDto) {
    // Primero crear la dirección
    const direccion = this.direccionRepository.create(createDto.direccion);
    const savedDireccion = await this.direccionRepository.save(direccion);

    // Luego crear la organización con el id de la dirección
    const organizacion = this.organizacionRepository.create({
      nombre: createDto.nombre,
      telefono: createDto.telefono,
      id_direccion: savedDireccion.id_direccion,
    });

    return this.organizacionRepository.save(organizacion);
  }

  async update(id: number, updateDto: UpdateOrganizacionDto) {
    const organizacion = await this.findOne(id);
    
    if (!organizacion) {
      throw new Error('Organización no encontrada');
    }

    // Si se actualizan datos de dirección
    if (updateDto.direccion) {
      await this.direccionRepository.update(
        organizacion.id_direccion,
        updateDto.direccion,
      );
    }

    // Actualizar datos de organización
    const { direccion, ...orgData } = updateDto;
    if (Object.keys(orgData).length > 0) {
      await this.organizacionRepository.update(id, orgData);
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    const organizacion = await this.findOne(id);
    
    if (!organizacion) {
      throw new Error('Organización no encontrada');
    }

    // Eliminar organización
    await this.organizacionRepository.delete(id);
    
    // Eliminar dirección asociada
    await this.direccionRepository.delete(organizacion.id_direccion);

    return { deleted: true };
  }
}
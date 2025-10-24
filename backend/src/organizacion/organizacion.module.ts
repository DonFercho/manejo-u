import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizacionService } from './organizacion.service';
import { OrganizacionController } from './organizacion.controller';
import { Organizacion } from './entities/organizacion.entity';
import { Direccion } from './entities/direccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacion, Direccion])],
  controllers: [OrganizacionController],
  providers: [OrganizacionService],
  exports: [OrganizacionService],
})
export class OrganizacionModule {}
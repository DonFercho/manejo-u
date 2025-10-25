import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrganizacionService } from './organizacion.service';
import { CreateOrganizacionDto } from './dto/create-organizacion.dto';
import { UpdateOrganizacionDto } from './dto/update-organizacion.dto';

@Controller('organizacion')
export class OrganizacionController {
  constructor(private readonly organizacionService: OrganizacionService) {}

  @Get()
  findAll() {
    return this.organizacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.organizacionService.findOne(+id);
  }

  @Post()
  create(@Body() createDto: CreateOrganizacionDto) {
    return this.organizacionService.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateOrganizacionDto) {
    return this.organizacionService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.organizacionService.remove(+id);
  }
}
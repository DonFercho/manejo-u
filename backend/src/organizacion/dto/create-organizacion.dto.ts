import { IsString, IsNotEmpty, IsNumber, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class DireccionDto {
  @IsString()
  @IsNotEmpty()
  departamento: string;

  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @IsString()
  @IsNotEmpty()
  comuna: string;

  @IsString()
  @IsNotEmpty()
  barrio: string;

  @IsString()
  @IsNotEmpty()
  nomenclatura: string;
}

export class CreateOrganizacionDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  telefono: number;

  @IsObject()
  @ValidateNested()
  @Type(() => DireccionDto)
  direccion: DireccionDto;
}
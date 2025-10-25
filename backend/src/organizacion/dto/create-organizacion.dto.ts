import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrganizacionDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  telefono: number;

  // Mantener campo 'direccion' como string  
  @IsString()
  @IsNotEmpty()
  direccion: string;
}
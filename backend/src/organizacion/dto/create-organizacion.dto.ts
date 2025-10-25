import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrganizacionDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  telefono: number;

  @IsString()
  @IsNotEmpty()
  direccion: string;
}
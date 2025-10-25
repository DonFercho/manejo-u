import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { OrganizacionModule } from './organizacion/organizacion.module';
import { organizacion } from './organizacion/entities/organizacion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-db', 
      port: 3306,
      username: 'usuario1',
      password: 'ps1234', 
      database: 'db_usuarios',
      entities: [Usuario, organizacion], 
      synchronize: true, 
      autoLoadEntities: true,
    }),
    UsuariosModule,
    OrganizacionModule,
  ],
   controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-db', // 👈 nombre del servicio en docker-compose
      port: 3306,
      username: 'usuario1',
      password: 'ps1234', // o la que tengas en tu docker-compose
      database: 'db_usuarios',
      entities: [Usuario], // puedes poner todas tus entidades o usar un patrón
      synchronize: true, // 👈 crea automáticamente las tablas (solo en desarrollo)
      autoLoadEntities: true,
    }),
    UsuariosModule,
  ],
   controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
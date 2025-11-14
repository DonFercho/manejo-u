<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Manejo-U: Microservicio para Gestión Académica

Este repositorio contiene el backend de un microservicio desarrollado con **NestJS** para la gestión de organizaciones y usuarios en entornos académicos. El sistema está diseñado para ser escalable, seguro y fácilmente integrable con otros módulos institucionales.




##  Funcionalidad principal

El microservicio permite:

-  Registrar, actualizar y eliminar organizaciones académicas
-  Gestionar usuarios con atributos como nombre, correo, contraseña y estado
-  Consultar entidades por ID o listado completo
-  Ejecutar pruebas unitarias y de integración
-  Desplegar el entorno completo con Docker (base de datos, backend, Adminer)





##  Estructura del repositorio
backend/ 
├── src/ 
│ ├── organization/ 
│ │ ├── dto/ 
│ │ ├── entities/ 
│ │ ├── organization.controller.ts 
│ │ ├── organization.service.ts 
│ │ └── organization.module.ts 
│ ├── usuarios/ 
│ │ ├── usuario.entity.ts 
│ │ ├── usuarios.controller.ts 
│ │ ├── usuarios.service.ts 
│ │ └── usuarios.module.ts 
│ ├── app.controller.ts 
│ ├── app.service.ts 
│ └── main.ts 
├── test/ 
├── Dockerfile 
├── docker-compose.yaml 
├── package.json 
├── tsconfig.json 
└── .gitignore





##  Instalación y ejecución

### Requisitos

- Node.js ≥ 18
- Docker y Docker Compose
- MySQL (si no se usa Docker)

### Instalación local

```bash
npm install

npm run start:dev

# Ejecucion con Docker
npm run docker_start



# Esto levanta:
mysql-db en el puerto 3307
adminer en el puerto 8080
backend-node en el puerto 3000



##  Tecnologías utilizadas

# NestJS: Framework backend modular
# TypeORM: ORM para MySQL
# MySQL 8: Base de datos relacional
# Docker & Docker Compose: Contenerización
# Jest: Framework de pruebas
# ESLint + Prettier: Linter y formateador



# Endpoints principales

##  Organización
# Método  |	 Ruta    	     |   Descripción
# POST		  /organization		  Crear organización
# GET		    /organization		  Listar todas las organizaciones
# GET		    /organization:id	Obtener organización por ID
# PATCH		  /organization:id	Actualizar organización
# DELETE	  /organization:id	Eliminar organización


# Usuarios
# Método  |	 Ruta    	     |   Descripción
# POST		  /usuarios		      Crear organización
# GET		    /usuarios		      Listar todas las organizaciones
# GET		    /usuarios:id		  Obtener organización por ID
# PATCH		  /usuarios:id		  Actualizar organización
# DELETE	  /usuarios:id		  Eliminar organización



# Pruebas
npm run test         # Ejecuta pruebas unitarias
npm run test:cov     # Genera reporte de cobertura
npm run test:e2e     # Pruebas end-to-end



# Docker Compose

services:
  db: mysql:8.0
  adminer: adminer
  backend: NestJS app

# Base de datos: db_usuarios
# Usuario: usuario1
# Contraseña: ps1234



# Variables de entorno del backend:
DB_HOST=db
DB_PORT=3306
DB_USER=usuario1
DB_PASS=ps1234
DB_NAME=db_usuarios



# Scripts disponibles

# start		      |	Inicia la aplicación NestJS
# start:dev	    |	Inicia en modo desarrollo con recarga automática
# start:debug	  |	Inicia con depuración activa
# start:prod	  |	Ejecuta el proyecto compilado desde dist/main.js
# build		      |	Compila el proyecto NestJS
# format	      |	Aplica Prettier para formatear el código
# lint		      |	Ejecuta ESLint con corrección automática
# test		      |	Ejecuta pruebas unitarias con Jest
# test:watch	  |	Ejecuta pruebas en modo observación
# test:cov	    |	Genera reporte de cobertura de pruebas
# test:debug	  |	Ejecuta pruebas en modo depuración
# test:e2e	    |	Ejecuta pruebas end-to-end con configuración personalizada
# docker_start	|	Levanta el entorno con Docker usando docker-compose



# Dependencias clave

Paquete		      |	Versión		        |	Propósito
@nestjs/core		  ^11.0.1			        Framework principal
@nestjs/typeorm		^11.0.0			        Integración con TypeORM
typeorm			      ^0.3.27			        ORM para MySQL
mysql2			      ^3.15.2			        Driver de conexión MySQL
jest, ts-jest		  ^30.0.0			        Pruebas unitarias
eslint, prettier	^9.18.0 / ^3.4.2	  Calidad y estilo de código



# Archivos ignorados (.gitignore)

# node_modules/, dist/, build/
# .env, .vscode/, .idea/
# logs/, coverage/, *.log
# Archivos temporales y de diagnóstico
## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

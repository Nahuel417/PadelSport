# Proyecto Henry M3: PADEL SPORT!

## Descripción
Este proyecto es un gestor de turnos diseñado para organizar y administrar citas de manera eficiente, permitiendo a los usuarios programar, modificar y cancelar turnos según sus necesidades.

## Objetivos del proyecto
- **Automatización de procesos**: Reducir el trabajo manual en la gestión de turnos mediante una herramienta eficiente y fácil de usar.  
- **Mejorar la organización**: Proveer un sistema estructurado para la programación, modificación y cancelación de turnos.  
- **Facilitar la accesibilidad**: Permitir a los usuarios gestionar sus turnos desde cualquier lugar a través de una interfaz intuitiva.  
- **Optimizar el tiempo**: Minimizar el tiempo dedicado a la administración de turnos, tanto para los usuarios como para los administradores.  
- **Escalabilidad**: Diseñar el sistema para que pueda adaptarse a diferentes tipos de usuarios o sectores (médico, estético, profesional, etc.).  
- **Seguridad**: Garantizar la protección de los datos personales de los usuarios mediante autenticación segura y encriptación de información.  

## Tecnologías Utilizadas

### Lenguajes de Programación
- **JavaScript (JS)**: Utilizado en la mayoría de las configuraciones y en el front-end para la interacción dinámica.  
- **TypeScript (TS)**: Empleado principalmente en el back-end para agregar tipado estático y mejorar la mantenibilidad del código.

### Back-End
El back-end del proyecto está desarrollado con las siguientes tecnologías:

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.  
- **Express**: Framework para crear aplicaciones web y APIs.  
- **TypeORM**: ORM para interactuar con la base de datos PostgreSQL.  
- **PostgreSQL**: Base de datos relacional utilizada para almacenar información.  
- **dotenv**: Gestión de variables de entorno.  
- **reflect-metadata**: Para trabajar con decoradores en TypeScript.  
- **Nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

### Front-End
El front-end está construido utilizando:

- **React**: Biblioteca para la construcción de interfaces de usuario.  
- **Vite**: Herramienta de desarrollo rápido para aplicaciones modernas.  
- **React Router**: Para gestionar la navegación en la aplicación.  
- **Redux Toolkit**: Gestión de estado global.  
- **Axios**: Cliente HTTP para consumir APIs.  
- **Formik**: Manejo de formularios de manera eficiente.

### Herramientas de Desarrollo
- **TypeScript**: Para tipado estático y un código más robusto.  
- **ESLint**: Linter para mantener el código limpio y consistente.  
- **Morgan**: Logger de solicitudes HTTP en el servidor.  
- **Cors**: Para habilitar el intercambio de recursos entre dominios.  



## Instalación

```bash
$ npm install
```

## Ejecución de la aplicación

```bash
# back
$ npm start

# front
$ npm run dev
```

## Environment Variables
Make sure to create a `.env` file in the project root with the following values:

```bash
# Base de datos
DATA_BASE=                  # Nombre de la base de datos
POSTGREST_USERNAME=         # Usuario de la base de datos
POSTGREST_PASS=             # Contraseña para la base de datos

# Puerto en el que se levanta el server
PORT=                       # Puerto de la base de datos PostgreSQL
```

## Capturas de Pantalla

### Página Principal
![Página Principal](https://github.com/user-attachments/assets/b7b30a6b-baa4-4f3a-9bda-0fb45afcacd8)

### Formulario de Turnos
![Formulario de Turnos](https://github.com/user-attachments/assets/522a1ffd-00e1-4ef3-860a-d11bc7a3115c)
![Formulario de Turnos](https://github.com/user-attachments/assets/6dd515e6-3054-4865-963f-383e83d3330c)
![Formulario de Turnos](https://github.com/user-attachments/assets/af96a969-661c-4e0e-a0f8-eb9ab68ee482)
![Formulario de Turnos](https://github.com/user-attachments/assets/65cb9a1a-8330-4aae-a4ea-d2b4e206990b)

## Deploy (proximamente)


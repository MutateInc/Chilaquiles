# Ambiente Local


### Pre-Requisitos 📋

_Para poder instalar el proyecto de manera local será necesario contar con lo siguente:_

```
php 8.0
```

```
Composer 2.0
```

```
MySQL / MariaDB 10.4
```

```
XAMPP o MAMP
```


### Instalación 🔧

_Para instalar el proyecto de forma local sigua los siguientes pasos y comandos:_

_Descarge el proyecto via git:_

_- Ingrese los siguientes comandos en su terminal:_

```cd /path-de-su-eleccion/
git clone https://github.com/AlbertoMatuteB/APPac.git
cd /Appac/
```


_Instale las dependencias de Laravel/Composer:_

_- Ingrese los siguientes comandos en su terminal en el mismo path en el que se encuentra:_
```
composer install
```


_Copie el contenido del archivo .env.example en un nuevo archivo llamado .env en el mismo path en el que se encuentra:_

_- Ingrese los siguientes comandos en su terminal en el mismo path en el que se encuentra:_

```
cp .env.example .env
```


_Agrege la llave única de proyecto:_

_- Ingrese los siguientes comandos en su terminal en el mismo path en el que se encuentra:_

```
php artisan key:generate
```


_Configure la base de datos y las migraciones:_

```
Vaya a su gestor de Base de datos (XAMP o MAMP) e inicie los servicios de MYSQL / MariaDB

En localhost/phpmyadmin o en el gestor de base de datos, cree una base de datos con el nombre "APAC".
En localhost/phpmyadmin o en el gestor de base de datos, cree un usuario con el nombre "APAC".
```


```
Abrá el archivo .env del proyecto y modifique el nómbre de la base de datos el usuario y la contraseña.

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=APAC
DB_USERNAME=APAC
DB_PASSWORD=contraseña
 
```

_Corra las migraciones y seeders:_

_- Ingrese los siguientes comandos en su terminal en el mismo path en el que se encuentra:_

```
php artisan migrate:fresh --seed
```


_Corra el proyecto_

_- Ingrese los siguientes comandos en su terminal en el mismo path en el que se encuentra:_

```
php artisan serve
Debera mandarle al link http://127.0.0.1:8000
```


## Construido 🛠️

_Para el proyecto se utilizaron los siguientes recursos:_

* [Laravel](https://laravel.com/) - Laravel 
* [XAMPP](https://www.apachefriends.org/download.html) - Manejador de PHP y MySQL
* [Composer](https://getcomposer.org/) - Manejador de dependencias
* [PHPStorm](https://www.jetbrains.com/phpstorm/) - IDE preferido (opcional)
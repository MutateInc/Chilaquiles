---
label: 'Estandares'

sidebar_position: 2
---

## Convenciones de Nombres

-   Las variables deben nombrarse usando camelcase, comenzando con letras minúsculas (por ejemplo, localData), mientras que los nombres de variables globales deben comenzar con una letra mayúscula (por ejemplo, GlobalData).
-   Los nombres de constantes deben formarse con todas las letras mayúsculas (por ejemplo, CONSDATA).
-   Los nombres de las variables deben de ser significativos para comprender el motivo de su uso y hay que evitar el uso de dígitos.
-   Las funciones deben describir el motivo de su uso de manera clara y breve y debe escribirse en camelcase comenzando con letras minúsculas (por ejemplo, guardarFuncion).
-   Al momento de establecer un lenguaje para el código(Español, Ingles, etc) este se debe de mantener al momento de nombramiento de variables
-   Al momento de declarar una colección, arreglos o estructura de datos de múltiples objetos, esta debe de ser declarada en plural, así mismo, al declarar una estructura individual, esta debe de ser declarada en singular.

## Indentación

-   El tamaño del tab equivale a 4 espacios
-   Debe haber un espacio después de una coma entre dos argumentos de función.
-   Cada bloque anidado debe estar debidamente indentado y espaciado.
-   La indentación adecuada debe estar al principio y al final de cada bloque del programa.
-   Todas las llaves deben comenzar la línea donde se llama el argumento y el código que sigue al final de las llaves debe comenzar en una nueva línea.

## Comentarios

-   Funciones con nombres que no describan su propósito deben ser documentadas, en la documentación se deben definir el propósito y las entradas y salidas de la función.

## Rutas

El nombrambiento de rutas seguira el estandar de RESTful siguiente:

| Nombre de la ruta | URL                        | HTTP Method | Descripción                                |
| ----------------- | -------------------------- | ----------- | ------------------------------------------ |
| Index             | /beneficiarios             | GET         | Listado de beneficiarios                   |
| New               | /beneficiario/new          | GET         | Mostrar form para crear nuevo beneficiario |
| Create            | /beneficiarios             | POST        | Agregar un nuevo beneficiario              |
| Show              | /beneficiarios/{id}        | GET         | Consultar beneficiario                     |
| Edit              | /beneficiarios/{id}/edit   | GET         | Mostrar form de edición                    |
| Update            | /beneficiarios/{id}/edit   | POST        | Actualizar el beneficiario                 |
| Destroy           | /beneficiarios/{id}/delete | POST        | Borrar el beneficiario                     |

## Modelos

Los modelos deberan de ser definidos en singular, primera letra en mayúscula y en el lenguaje predefinido(Es) ex.

```php
User
Beneficiary
Diagnosis
```

### Propiedades

Para las propiedades de los modelos, estos deben de ser nombrados en snake_case ex.

```php
$this->updated_at
```

### Metodos

Deberan de ser nombrados en camelCase

```php
public function age();
public function getAll();
```

lo mismo para las relaciones, pero en este caso deberá de ser en singular

```php
public function city();
public function diagnosisAll();
```

## Controladores

Los controladores deberan de ser dividido en archivos individuales por cada función las cuales estaran en un directorio con el nombre del modulo. Estos deberan de tener el nombre de la función que realizan seguido del nombre del modulo, esto capitalizado por cada palabra.
Ejemplo de nombrambiento de controlador:
| Metodo | URL | HTTP Method | Controlador |
| ------ | --- | ----------- | ----------- |
| Index | /beneficiarios | GET | IndexBeneficiary |
| New | /beneficiario/new | GET | NewBeneficiary |
| Create | /beneficiarios | POST | CreateBeneficiary |
| Read | /beneficiarios/{id} | GET | ReadBeneficiary |
| Edit | /beneficiarios/{id}/edit | GET | EditBeneficiary |
| Update | /beneficiarios/{id}/edit | POST | UpdateBeneficiary |
| Destroy | /beneficiarios/{id}/delete | POST | DeleteBeneficiary |

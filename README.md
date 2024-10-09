# Sistema de Gestión de Ventas

## Descripción General

##### Este proyecto es un Sistema de Gestión de Ventas desarrollado con Node.js y MongoDB utilizando Mongoose como la biblioteca de Modelado de Datos.

##### La estructura está diseñada para permitir relaciones flexibles entre usuarios, empleados y productos mediante el uso de referencias (ObjectId) en los esquemas de MongoDB.

## Modelos

#### Modelo de Usuario

##### Este modelo almacena la información básica de los usuarios, como su nombre, correo electrónico y contraseña. Los usuarios pueden realizar compras (ventas) en el sistema.

#### Modelo de Empleado

##### El modelo de empleado almacena los datos de los empleados que realizan las ventas en el sistema. Cada venta está vinculada a un empleado.

#### Modelo de Producto

##### Este modelo define los detalles de los productos que están disponibles para la venta en el sistema, como el nombre, la descripción, el precio y el stock disponible.

#### Modelo de Venta

##### El modelo de venta registra las referencias a los productos vendidos, el empleado que realizó la venta y el usuario que compró los productos. Este modelo utiliza referencias (ObjectId) para relacionar las colecciones de Usuario, Empleado y Producto.

## Decisión de Usar Referencias

###### El uso de referencias en los esquemas (utilizando ObjectId) permite mantener un diseño más modular y escalable. En lugar de duplicar la información de los usuarios, empleados y productos dentro de las ventas, los documentos de la colección de ventas referencian los datos relevantes en sus respectivas colecciones.
# Práctica: Configuración y Despliegue de Virtual Hosts en Apache2

## 1. Investigación: ¿Qué es un Virtual Host y qué ventajas ofrece?
Un **Virtual Host** es una funcionalidad de Apache que permite alojar múltiples sitios web independientes en una misma máquina física o servidor, compartiendo recursos y una única dirección IP. Sus principales ventajas son el ahorro de costes, el aislamiento de directorios (`DocumentRoot`), la independencia en los archivos de registro (`logs`) y una gestión personalizada por dominio.

---

## 2. Proceso de Configuración Paso a Paso

### Creación de entornos y configuración en Ubuntu
Se procedió a crear la estructura de directorios, asignar los permisos correspondientes a `www-data`, crear los archivos de configuración en `/etc/apache2/sites-available/` y habilitar los dominios mediante los comandos de gestión de Apache.

![Configuración y habilitación de Virtual Hosts en la terminal](imagenes/captura1.png)

---

### Comprobación de Acceso a los Sitios Virtuales

#### Comprobación de Sitio 1 (`sitio1.local`)
Tras mapear la dirección IP del servidor Ubuntu (`192.168.1.160`) con el dominio personalizado en el archivo `hosts` del equipo cliente Windows, se verificó el correcto direccionamiento y visualización del primer entorno virtual.

![Visualización correcta de Sitio 1 en el navegador](imagenes/captura2.png)

---

#### Comprobación de Sitio 2 (`sitio2.local`)
De forma idéntica, se realizó la prueba de acceso para el segundo entorno virtual, comprobando el aislamiento de contenidos bajo el mismo servidor web.

![Visualización correcta de Sitio 2 en el navegador](imagenes/captura3.png)
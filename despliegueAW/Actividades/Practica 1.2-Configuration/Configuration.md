# Server Basic Configuration

Documentación del proceso de configuración inicial y preparación de un servidor basado en Ubuntu Server.

---

## 1. System Updates and General Information

En primer lugar, actualizamos los repositorios del sistema e instalamos todas las actualizaciones de seguridad y software pendientes. Finalmente, verificamos la versión del sistema operativo y el nombre de la máquina.

### Comandos ejecutados:
```bash
sudo apt update
sudo apt upgrade -y
sudo apt update
hostname
lsb_release -a
```

### Explicación:
* `sudo apt update`: Descarga la lista actualizada de paquetes disponibles desde los repositorios oficiales.
* `sudo apt upgrade -y`: Aplica y descarga las actualizaciones pendientes de los paquetes instalados.
* `hostname`: Muestra el nombre asignado a la máquina virtual en la red.
* `lsb_release -a`: Muestra la información detallada de la distribución Linux (versión LTS y nombre en código).

![Verificación de actualización e información del sistema](./images/1.png)

---

## 2. Basic Tools Installation

Instalación del paquete de utilidades esenciales para la administración del servidor y gestión del sistema.

### Comandos ejecutados:
```bash
sudo apt install -y curl wget git vim nano unzip tree net-tools htop
git --version
```

### Explicación de las herramientas instaladas:
* **`curl`**: Herramienta de línea de comandos para transferir datos e interactuar con servidores usando protocolos como HTTP, HTTPS o FTP.
* **`wget`**: Utilidad de descarga de archivos desde la web mediante HTTP, HTTPS y FTP en segundo plano.
* **`git`**: Sistema de control de versiones distribuido para rastrear cambios en archivos y código fuente.
* **`vim`**: Editor de texto avanzado en terminal, altamente configurable y eficiente.
* **`nano`**: Editor de texto sencillo y directo en consola, ideal para ediciones rápidas.
* **`unzip`**: Herramienta para descomprimir y extraer archivos en formato `.zip`.
* **`tree`**: Muestra la estructura de directorios y archivos de forma visual recursiva en formato de árbol.
* **`net-tools`**: Conjunto de utilidades clásicas de red para diagnóstico e información (como `ifconfig` o `netstat`).
* **`htop`**: Monitor interactivo de procesos en tiempo real para verificar el uso de CPU, RAM y memoria SWAP.

![Confirmación de instalación de Git](./images/2.png)

---

## 3. Network, SSH, User, and Group Verification

Comprobación del direccionamiento de red, las rutas de tráfico, el estado del servicio de administración remota SSH y la identificación del usuario actual.

### Comandos ejecutados:
```bash
ip a
ip route
sudo systemctl status ssh
sudo ss -tulpn
whoami
groups
```

### Explicación:
* `ip a`: Muestra las interfaces de red configuradas e direcciones IP asignadas a la máquina.
* `ip route`: Muestra la tabla de enrutamiento del sistema y la puerta de enlace por defecto (Gateway).
* `sudo systemctl status ssh`: Muestra el estado del daemon SSH (`sshd`). Permite comprobar si el servicio está activo (`active (running)`).
* `sudo ss -tulpn`: Lista los puertos y sockets abiertos en la máquina. Confirma que el puerto **22 (TCP)** asociado a SSH está en escucha.
* `whoami`: Imprime el nombre del usuario con la sesión abierta en la terminal.
* `groups`: Lista los grupos a los que pertenece el usuario actual en el sistema.

![Comprobación de puertos y usuarios](./images/3.png)

---

## 4. Firewall Configuration (UFW)

Configuración de **Uncomplicated Firewall (UFW)** para permitir el tráfico remoto a través del puerto seguro de SSH antes de activar las reglas de filtrado de red.

### Comandos ejecutados:
```bash
sudo ufw status
sudo ufw allow ssh
sudo ufw enable
sudo ufw status
```

### Explicación:
* `sudo ufw status`: Comprueba el estado inicial del firewall (por defecto suele estar desactivado / `inactive`).
* `sudo ufw allow ssh`: Añade la regla para permitir las conexiones entrantes al puerto 22 (TCP) de SSH y no perder el acceso remoto al activarlo.
* `sudo ufw enable`: Habilita y activa la protección del firewall en el sistema.

![Estado final del Firewall UFW](./images/4.png)

---

## 5. System Snapshot (VirtualBox)

Se realiza el apagado controlado del servidor para crear un punto de restauración limpio en el hipervisor VirtualBox.

### Comandos ejecutados:
```bash
sudo shutdown now
```

### Explicación:
Una vez apagado el sistema operativo, dentro del panel de administración de VirtualBox se crea una instantánea llamada `01_UBUNTU_LIMPIO`. Esto asegura poder revertir la máquina virtual a un estado funcional básico y configurado en cualquier momento.

![Snapshot en VirtualBox](./images/5.png)
![Snapshot en VirtualBox-2](./images/6.png)
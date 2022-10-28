# proyecto2

PROYECTO 2 - LALIGA SANTANDER WEB

Este proyecto consiste en crear una página web que facilite al usuario ver resultados y clasificacion en tiempo real de la LaLiga Santander 2022-2023 de forma rápida.

Funcionalidades:

- Acceso a la clasificación general de los equipos de LaLiga Santader, donde el usuario podrá visualizar en cualquier momento que puesto ocupa su equipo.
- Acceso a los resultados en tiempo real de todos los partidos de LaLiga Santander. El usuario puede filtrar los resultados en función del equipo que le interese, así como en función del resultado del mismo : ganados, empatados o perdidos.

Tecnologías empleadas:

HTML5 : para hacer el esqueleto de la página web
CSS3 : para el diseño de la interfaz
Bootstrap : para el diseño de la interfaz y al mismo tiempo creando una web responsive capaz de adaptarse y que pueda ser accesible desde cualquier dispositivo: tablets, smartphone, pc, etc..
JavaScript : para dar mejor rendimiento y dinamismo al sitio web y al mismo tiempo darle funcionalidad
Postman : para coger la información y los datos que se muestran en la web (utilizada inicialmente, hasta que se hizo el fetch directamente en los archivos JS)
Git y GitHub : control de versiones y repositorio en remoto para trabajar en distintas branches
AlertifyJS : librería de JavaScript con la que se modificaron las alertas que se muestran al usuario.
Descripción técnica
Se han usado dos tipos de funciónalidades : genéricas y específicas.

Como funcionalidades genéricas podemos encontrar las siguientes funciones: getFetch(),crearTabla(), quitarSpinner(), crearTablaClasificacion()

- getFetch() usada en todos los archivos JS, es la función encargada de coger los datos en tiempo real de la API, sin necesidad de usar el POSTMAN.
- crearTabla() es la función encargada de crear la tabla con los equipos, cada vez que queremos filtrarlos por nombre del equipo, o bien los resultados: ganados, empatados, perdidos o próximos partidos. Interviene cada vez que es accionado alguno de los botones del filtro, pasándole un parámetro ú otro. Esta función se podría volver a usar si queremos hacer lo mismo con los equipos de las otras ligas, arriba mencionadas.
- quitarSpinner() usada en todos los archivos JS, en los cual se cogen datos con la API. Su función es de "parar/ocultar" el spinner después de recibir la respuesta de la API
- crearTablaClasifiacion() encargada de crear la tabla de clasifiacion de los equipos de LaLiga Santander, recogiendo datos como: posicion, nombre del equipo, partidos jugados, partidos ganados, empatados o perdidos, goles marcados, goles recibidos, diferencia de goles y puntos totales. Se podría volver a usar para hacer la tabla de clasifiación de las otras ligas.
  Como funcionalidades especificas podemos encontrar las siguiente funciónes :

limpiarTabla() función usada para limpiar el body de la tabla, cada vez que realizamos una búsqueda nueva, de esta manera solo nos aparecen los nuevos resultados. Sin esta función se añadirían filas a la tabla y para poder encontrar los resultados de nuestra búsqueda tendríamos que hacer scroll hasta el final de la tabla.

filtrarNombreEquipo() esta función tiene 2 tareas :

- filtrar los equipos por nombre con los datos introducidos por el usuario
- volver hacer otro filtro de la nueva array creada con los nombres del equipo en función de su resultado
  resetearFiltro() usada para resetear todos los filtros, limpiando el campo donde el usuario introduce el nombre de su equipo. Esta función se usa también en el caso de que algúna de las condiciónes no se cumplen y al usuario le salta alguna alerta.

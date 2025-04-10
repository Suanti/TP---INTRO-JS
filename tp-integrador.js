// ``Trabajo Práctico Integrador:  Introducción a Javascript. 
// estudiante: SUANTI KATALINA BERNAL ORTIZ

// Sistema de Gestión de Biblioteca
// Introducción
// El siguiente trabajo práctico integrador está diseñado para evaluar tus conocimientos en los fundamentos de JavaScript
//  a través de la implementación de un conjunto de tareas que deben ser resueltas en un solo programa. 
// Asegúrate de aplicar las buenas prácticas y estándares de nomenclatura, además de seguir las instrucciones dadas.

// Objetivo
// Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, 
// aplicando los conceptos fundamentales de JavaScript vistos en el módulo.

// Requerimientos

// 1. Estructura de Datos
//  A. Crear un array de objetos llamado libros que contenga al menos 10 libros. 
// Cada libro debe tener las siguientes propiedades: 
// id (número)
// título (string), 
// autor (string), 
// año (número), 
// género (string), 
// disponible (booleano).

let libros = [ { id:184520 , título:'Los Miserables', autor:'Victor Hugo', año:1862, género:'Tragedia', disponible:'true'},
    { id:395490 , título:'Un Mundo Feliz', autor:'Aldous Huxley', año:1932, género:'ciencia ficción', disponible:'true'},
    { id:602530 , título:'Momo', autor:'Michael Ende', año:1973, género:'novela', disponible:'false'},
    { id:809740 , título:'Rebelión en la Granja', autor:'George Orwell', año:1945, género:'sátira', disponible:'true'},
    { id:634572 , título:'La Niebla', autor:'Stephen King', año:1980, género:'terror', disponible:'false'},
    { id:326570 , título:' Fausto', autor:'Johann Wolfgang von Goethe', año:1790, género:'teatro', disponible:'false'},
    { id:143652 , título:'Orgullo y Prejuicio', autor:'Jane Austen', año:1813, género:'Novela Rosa', disponible:'false'},
    { id:759374 , título:'El tren de las 4:50', autor:'Agatha Christie', año:1957, género:'misterio', disponible:'true'},
    { id:609826 , título:'Alas de sangre', autor:'Rebecca Yarros', año:2023, género:'fantasía romántica', disponible:'true'},
    { id:182590 , título:'Álgebra de Baldor', autor:'Aurelio Baldor', año: 1941, género:'matemáticas', disponible:'false'},
 ];

// B. Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
// id (número)
// nombre (string)
// email (string)
// librosPrestados (array de ids de libros).
let personas = [
    { nombre: "Ana", edad: 25, mail: 'anarojas@hotmail.com', librosPrestados: [809740, 182590 ]},
    { nombre: "Luis", edad: 30, mail:'luiseduardo@hotmail.com', librosPrestados: [634572]},
    { nombre: "Marta", edad: 22, mail: 'martastuart@gmail.com', librosPrestados: [759374, 609826, 184520] },
    { nombre: 'Juana', edad: 27, mail: 'juanawerkel@yahoo.com', librosPrestados:[395490, 143652, 809740, 326570]},
    { nombre: 'José', edad: 34, mail: 'joselucas@gmail.com', librosPrestados: [809740,602530 ]}
  ];
// 2. Funciones de Gestión de Libros
// Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

// Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal. 

// Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

// Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro. 

// 3. Gestión de Usuarios
// Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios. 

// Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

// Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

// Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

// 4. Sistema de Préstamos
// Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.

// Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
// 5. Reportes
// Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// Cantidad total de libros.
// Cantidad de libros prestados.
// Cantidad de libros por género.
// Libro más antiguo y más nuevo

// 6. Identificación Avanzada de libros
// Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra. Además la función debe excluir aquellos títulos que contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante. 

// 7. Cálculos Estadísticos
// Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de publicación de los libros:
// Obtener un array con los años de publicación de todos los libros.
// Calcular el promedio de los años de publicación.
// Encontrar el año de publicación más frecuente.
// Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math()

// 8. Manejo de Cadenas
// Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minúsculas.

// 9. Interfaz de Usuario por Consola
// Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().

// El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
// 10. Comentando mi código
// Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código. 

// Deberán dividir el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.

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

let libros = [
  {
    id: 184520,
    título: "Los Miserables",
    autor: "Victor Hugo",
    año: 1862,
    género: "Tragedia",
    disponible: "true"
  },
  {
    id: 395490,
    título: "Un Mundo Feliz",
    autor: "Aldous Huxley",
    año: 1932,
    género: "ciencia ficción",
    disponible: "true"
  },
  {
    id: 602530,
    título: "Momo",
    autor: "Michael Ende",
    año: 1973,
    género: "novela",
    disponible: "false"
  },
  {
    id: 809740,
    título: "Rebelión en la Granja",
    autor: "George Orwell",
    año: 1945,
    género: "sátira",
    disponible: "true"
  },
  {
    id: 634572,
    título: "La Niebla",
    autor: "Stephen King",
    año: 1980,
    género: "terror",
    disponible: "false"
  },
  {
    id: 326570,
    título: " Fausto",
    autor: "Johann Wolfgang von Goethe",
    año: 1790,
    género: "teatro",
    disponible: "false"
  },
  {
    id: 143652,
    título: "Orgullo y Prejuicio",
    autor: "Jane Austen",
    año: 1813,
    género: "Novela Rosa",
    disponible: "false"
  },
  {
    id: 759374,
    título: "El tren de las 4:50",
    autor: "Agatha Christie",
    año: 1957,
    género: "misterio",
    disponible: "true"
  },
  {
    id: 609826,
    título: "Alas de sangre",
    autor: "Rebecca Yarros",
    año: 2023,
    género: "fantasía romántica",
    disponible: "true"
  },
  {
    id: 182590,
    título: "Álgebra de Baldor",
    autor: "Aurelio Baldor",
    año: 1941,
    género: "matemáticas",
    disponible: "false"
  }
];

// B. Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
// id (número)
// nombre (string)
// email (string)
// librosPrestados (array de ids de libros).

let personas = [
  {
    nombre: "Ana",
    edad: 25,
    mail: "anarojas@hotmail.com",
    librosPrestados: [809740, 182590]
  },
  {
    nombre: "Luis",
    edad: 30,
    mail: "luiseduardo@hotmail.com",
    librosPrestados: [634572]
  },
  {
    nombre: "Marta",
    edad: 22,
    mail: "martastuart@gmail.com",
    librosPrestados: [759374, 609826, 184520]
  },
  {
    nombre: "Juana",
    edad: 27,
    mail: "juanawerkel@yahoo.com",
    librosPrestados: [395490, 143652, 809740, 326570]
  },
  {
    nombre: "José",
    edad: 34,
    mail: "joselucas@gmail.com",
    librosPrestados: [809740, 602530]
  }
];

// 2. Funciones de Gestión de Libros
// A. Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

let agregarlibro = prompt('ingrese el libro a agregar')
function agregarLibro ( id, titulo , autor, año, género){ libros.push ({id, titulo , autor, año, género});}

//B.  Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal. 

let criterio = prompt("Ingrese su criterio de busqueda: título, autor o género");
let valor = prompt("Ingrese el titulo, autor o género");

function buscarLibro(criterio, valor) {
  return libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
}
let resultados = buscarLibro(criterio, valor);
console.log(resultados);

//C.  Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

let criterio2 = prompt("Ingrese su criterio de busqueda: título o año ");
function ordenarLibros(criterio2) {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - 1 - i; j++) {
      if (libros[j][criterio2] > libros[j + 1][criterio2]) {
        // Intercambio de objetos
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp; } }}

  // Mostrar libros ordenados
  console.log(`Libros ordenados por ${criterio}:`);
  console.log(libros);
}
//A.  Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro. 
function borrarLibro(id) {
  const index = libros.findIndex(libro => libro.id === id);
  if (index !== -1) {
    libros.splice(index, 1);
  }
}

// 3. Gestión de Usuarios
// Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios. 
// A. Registrar un nuevo usuario

function registrarUsuario(id, nombre, email) {
  personas.push({ id, nombre, email, librosPrestados: [] });
}

// B. Mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
  console.log(personas);
}

// C. Buscar un usuario por email
function buscarUsuario(email) {
  return personas.find(usuario => usuario.email === email);
}

// D. Borrar un usuario
function borrarUsuario(email) {
  const index = personas.findIndex(usuario => usuario.email === email);
  if (index !== -1) {
    personas.splice(index, 1);
  }
}

// 4. Sistema de Préstamos

// A. Función para prestar un libro a un usuario
function prestarLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id === idLibro);
  const usuario = personas.find(u => u.id === idUsuario);

  if (!libro || !usuario) {
    console.log("Libro o usuario no encontrado.");
    return;
  }

  if (libro.disponible === 'false') {
    console.log("El libro no está disponible.");
    return;
  }

  libro.disponible = 'false';
  usuario.librosPrestados.push(idLibro);
  console.log(`El libro "${libro.título}" fue prestado a ${usuario.nombre}.`);
}

// B. Función para devolver un libro
function devolverLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id === idLibro);
  const usuario = personas.find(u => u.id === idUsuario);

  if (!libro || !usuario) {
    console.log("Libro o usuario no encontrado.");
    return;
  }

  const index = usuario.librosPrestados.indexOf(idLibro);
  if (index === -1) {
    console.log("Este usuario no tiene prestado ese libro.");
    return;
  }

  libro.disponible = 'true';
  usuario.librosPrestados.splice(index, 1);
  console.log(`El libro "${libro.título}" fue devuelto por ${usuario.nombre}.`);

// 5. Reportes
function generarReporteLibros() {
  // 1. Cantidad total de libros
  let totalLibros = libros.length;

  // 2. Cantidad de libros prestados (disponible === 'false')
  let librosPrestados = libros.filter(libro => libro.disponible === 'false').length;

  // 3. Cantidad de libros por género
  let cantidadPorGenero = libros.reduce((acumulador, libro) => {
    let genero = libro.género;
    if (acumulador[genero]) {
      acumulador[genero]++;
    } else {
      acumulador[genero] = 1;
    }
    return acumulador;
  }, {}); // empieza con un objeto vacío

  // 4. Libro más antiguo
  let libroMasAntiguo = libros.reduce((antiguo, actual) =>
    actual.año < antiguo.año ? actual : antiguo
  );

  // 5. Libro más nuevo
  let libroMasNuevo = libros.reduce((nuevo, actual) =>
    actual.año > nuevo.año ? actual : nuevo
  );

  // Mostrar reporte
  console.log("📋 REPORTE GENERAL:");
  console.log("Total de libros:", totalLibros);
  console.log("Cantidad de libros prestados:", librosPrestados);
  console.log("Cantidad de libros por género:", cantidadPorGenero);
  console.log("Libro más antiguo:", libroMasAntiguo.título, "-", libroMasAntiguo.año);
  console.log("Libro más nuevo:", libroMasNuevo.título, "-", libroMasNuevo.año);

// 6. Identificación Avanzada de libros
// Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra. Además la función debe excluir aquellos títulos que contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante. 

function librosConPalabrasEnTitulo() {
  let resultado = libros.filter(libro => {
    // Eliminar espacios al principio y final
    let titulo = libro.título.trim();

    // Verificamos si contiene más de una palabra
    let palabras = titulo.split(" ");
    if (palabras.length <= 1) return false;

    // Verificamos que no tenga números ni caracteres especiales
    let tieneCaracteresInvalidos = /[^a-zA-ZÁÉÍÓÚáéíóúÑñ\s]/.test(titulo);
    if (tieneCaracteresInvalidos) return false;

    return true;
  });

  console.log("📚 Títulos válidos con más de una palabra y sin caracteres especiales:");
  resultado.forEach(libro => console.log(libro.título));
}

// 7. Cálculos Estadísticos
// Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de publicación de los libros:
// Obtener un array con los años de publicación de todos los libros.

function calcularEstadisticas() {
  let años = libros.map(libro => libro.año);

// Calcular el promedio de los años de publicación.

let promedio = años.reduce((acum, año) => acum + año, 0) / años.length;

// Encontrar el año de publicación más frecuente.

let frecuencia = {};
años.forEach(año => {
  frecuencia[año] = (frecuencia[año] || 0) + 1;
});

let añoFrecuente = null;
let maxFrecuencia = 0;
for (let año in frecuencia) {
  if (frecuencia[año] > maxFrecuencia) {
    maxFrecuencia = frecuencia[año];
    añoFrecuente = año;
  }
}

// Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math()

let añoMin = Math.min(...años);
let añoMax = Math.max(...años);
let diferencia = añoMax - añoMin;

console.log("📊 Estadísticas de Publicación:");
console.log("Años:", años);
console.log("Promedio de publicación:", Math.round(promedio));
console.log("Año más frecuente:", añoFrecuente);
console.log("Diferencia entre el más nuevo y el más antiguo:", diferencia, "años");

// 8. Manejo de Cadenas
// Crear una función normalizarDatos() que utilice métodos de strings para:

function normalizarDatos() {

// Convertir todos los títulos a mayúsculas.

libros.forEach(libro => {
  libro.título = libro.título.toUpperCase();
});

// Eliminar espacios en blanco al inicio y final de los nombres de autores.

libros.forEach(libro => {
  libro.autor = libro.autor.trim();
});

// Formatear los emails de los usuarios a minúsculas.

personas.forEach(usuario => {
  usuario.mail = usuario.mail.toLowerCase();
});

console.log("✔ Datos normalizados correctamente.");
}


// 9. Interfaz de Usuario por Consola
// Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
function menuPrincipal() {
  let opcion;

  do {
    opcion = prompt(
      "📚 Menú Principal de la Biblioteca\n" +
      "1. Agregar libro\n" +
      "2. Buscar libro\n" +
      "3. Ordenar libros\n" +
      "4. Borrar libro\n" +
      "5. Registrar usuario\n" +
      "6. Mostrar todos los usuarios\n" +
      "7. Buscar usuario\n" +
      "8. Borrar usuario\n" +
      "9. Prestar libro\n" +
      "10. Devolver libro\n" +
      "11. Generar reporte de libros\n" +
      "12. Libros con palabras válidas en el título\n" +
      "13. Calcular estadísticas\n" +
      "14. Normalizar datos\n" +
      "0. Salir"
    );

    switch(opcion) {
      case "1":
        let id = parseInt(prompt("ID del libro:"));
        let titulo = prompt("Título:");
        let autor = prompt("Autor:");
        let año = parseInt(prompt("Año:"));
        let genero = prompt("Género:");
        agregarLibro(id, titulo, autor, año, genero);
        break;

      case "2":
        let criterio = prompt("Buscar por: título, autor o género");
        let valor = prompt("Ingrese valor de búsqueda:");
        console.log(buscarLibro(criterio, valor));
        break;

      case "3":
        let criterio2 = prompt("Ordenar por: título o año");
        ordenarLibros(criterio2);
        break;

      case "4":
        let idBorrar = parseInt(prompt("ID del libro a borrar:"));
        borrarLibro(idBorrar);
        break;

      case "5":
        let nombre = prompt("Nombre del usuario:");
        let email = prompt("Email:");
        registrarUsuario(nombre, email);
        break;

      case "6":
        console.log(mostrarTodosLosUsuarios());
        break;

      case "7":
        let emailBuscado = prompt("Ingrese email del usuario:");
        console.log(buscarUsuario(emailBuscado));
        break;

      case "8":
        let nombreBorrar = prompt("Nombre del usuario:");
        let emailBorrar = prompt("Email:");
        borrarUsuario(nombreBorrar, emailBorrar);
        break;

      case "9":
        let idLibroP = parseInt(prompt("ID del libro a prestar:"));
        let idUsuarioP = parseInt(prompt("Índice del usuario (0-4):")); // usar índice simple si no hay id
        prestarLibro(idLibroP, idUsuarioP);
        break;

      case "10":
        let idLibroD = parseInt(prompt("ID del libro a devolver:"));
        let idUsuarioD = parseInt(prompt("Índice del usuario (0-4):"));
        devolverLibro(idLibroD, idUsuarioD);
        break;

      case "11":
        generarReporteLibros();
        break;

      case "12":
        librosConPalabrasEnTitulo();
        break;

      case "13":
        calcularEstadisticas();
        break;

      case "14":
        normalizarDatos();
        break;

      case "0":
        alert("👋 ¡Gracias por usar el sistema de biblioteca!");
        break;

      default:
        alert("❌ Opción no válida. Intente nuevamente.");
        break;
    }

  } while(opcion !== "0");
}
menuPrincipal();

// 10. Comentando mi código
// Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código. 
// Deberán dividir el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.

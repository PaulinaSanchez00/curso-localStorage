//Obtener los datos de localStorage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
//convertir el String a Objeto
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('meses');
//convertir el String a Array
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
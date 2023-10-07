//localStorage guarda hasta que uno lo remueva el dato, asi apagues el computador
//localStorage solo guarda string, no arreglos, todo lo convierte a string
localStorage.setItem('nombre','Juan');

//Esto es un objeto
const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300,
};

//Esto convierte el objeto en un string para guardarlo en localStorage
const productoString = JSON.stringify(producto);

//aqui guardamos el objeto convertido en string en el localStorage
localStorage.setItem('producto', productoString);

//convertir un arreglo a string
const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
//Guardamos el arreglo en localStorage
localStorage.setItem('meses', mesesString);
//sessionStorage solo guarda temporalmente hasta que se reinicia la pagina
sessionStorage.setItem('nombre', 'Juan');
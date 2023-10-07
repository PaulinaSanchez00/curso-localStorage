//Eliminar un elemento del localStorage
localStorage.removeItem('nombre');

//Acualizar un elemento del localStorage | Obtenerlo | Convertirlo en Array
const mesesArray = JSON.parse(localStorage.getItem('meses'));
//Agregando mes
mesesArray.push('Abril');
console.log(mesesArray);

//Mandarlo ya modificaado para que se actualice
localStorage.setItem('meses', JSON.stringify(mesesArray));

//Para vaciar el localStorage
localStorage.clear();
const datosPersonales = {
nombre: "Victor", apellido: "Rodriguez", edad: 29, altura: 175, eresDesarrollador: true
};
const edad = datosPersonales.edad;
const lista = [
{...datosPersonales},
{nombre: "Juan", apellido: "Martin", edad: 35, altura: 190, eresDesarrollador: false},
{nombre: "Pedro", apellido: "Lorenzo", edad: 25, altura: 165, eresDesarrollador: true},
]
const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenada);
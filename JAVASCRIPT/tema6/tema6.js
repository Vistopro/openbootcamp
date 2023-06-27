let listaCompra = ["pan", "leche", "huevos", "aceite", "sal"];
listaCompra.push("Aceite de girasol")
listaCompra.pop();
let listaPelis = [
    {titulo: "Toy Story", director: "disney", fecha: 1995}, 
    {titulo: "Titanic", director: "James Cameron", fecha: 1997}, 
    {titulo: "El Rey León", director: "disney", fecha: 1994}
];
let lista2010 = listaPelis.filter (peli => peli.fecha >= 2010)
let listaDirectores = listaPelis.map (peli => peli.director)
let listaTitulos = listaPelis.map (peli => peli.titulo)
let listaPelisConcat = listaDirectores.concat(listaTitulos)
let listaPelisPropag = [...listaDirectores, ...listaTitulos]
const yo = {
    nombre: "Federico",
    apellido: "Saboredo",
    edad: 17,
    altura: 190,
    eresDesarrollador: true
}

const edad = yo.edad
const lista = [
    {
        ...yo
    },{
        nombre: "Morfi",
        apellido: "Espel",
        edad: 20,
        altura: 180,
        eresDesarrollador: true
    },{
        nombre: "Jose",
        apellido: "Ruben",
        edad: 15,
        altura: 165,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)
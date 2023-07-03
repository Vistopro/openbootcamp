class Estudiante {
    nombre = "Victor"
    asignaturas = ["Javascript", "HTML", "CSS"];

    ObtenDatos() {
        return {
           nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante();
console.log(estudiante.ObtenDatos());
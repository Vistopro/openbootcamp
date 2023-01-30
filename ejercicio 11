import sqlite3


def buscarAlumno(a, b):
    conexion = sqlite3.connect("database.db")
    cursor = conexion.cursor()
    conexion.execute("""create table alumnos(
                     id integer primary key AUTOINCREMENT, nombre text, apellidos text)""")
    cursor.execute("""insert into alumnos (nombre,apellidos) values ("Antonio", "Rodriguez"),
                   ("Eduardo", "Peña"),("Tomás", "Garcia"),("Raul", "Mendoza"),
                    ("Laura", "Gomez"), ("Andrea", "Lopez"), ("Miguel", "Fernandez"), ("Paula", "Gonzalez")""")

    rows=cursor.execute(
        f"""SELECT * FROM alumnos where nombre='{a}' and apellidos='{b}'""")
    print(rows.fetchone())
    return (rows.fetchone())

    cursor.close()
    conexion.close()

nombreBusca= input("Introduce nombre a buscar: ")
apellidosBusca=input("Introduce apellido a buscar: ")

buscarAlumno(nombreBusca,apellidosBusca)

class Alumno():
    def __init__(self,nombre,nota):
        self.nombre=nombre
        self.nota=nota

    def Nombrar(self):
        return "Nombre del alumno: {}".format(self.nombre)

    def Nota(self):

        if self.nota >=5:
            return "Nota del alumno: {} / APROBADO".format(self.nombre)

        else:
            return "Nota del alumno: {} / SUSPENSO".format(self.nombre)

            
miAlumno=Alumno("Victor",9)
print(miAlumno.Nombrar())
print(miAlumno.Nota())

def anyoBisiesto(anyo):

    if anyo%4==0 & anyo%100==0  & anyo%400==0:
        print("Es un año bisiesto")

    else:
        print("No es un año bisiesto")

anyoBisiesto(int(input("Indica un año: ")))

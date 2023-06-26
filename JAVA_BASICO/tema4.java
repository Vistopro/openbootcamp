package com.company.poo;

public class HelloWorld {

    public static void main(String[] args) {


        SmartPhone movil= new SmartPhone("Samsung", "Galaxy", "Samsung", "rojo", 2018, 30, 64, "4k" );

        System.out.println(movil);

        SmartWatch reloj= new SmartWatch("Apple", "Watch", "Apple", "rojo", 2018, 30, "cuadrada", "deportivo", true);

        System.out.println(reloj);
        }

    }

//clase padre
abstract class SmartDevice {
//atributos

    String marca;
    String modelo;
    String fabricante;
    String color;
    int anyoFabricacion;
    int duracionBateria;

//constructores


    public SmartDevice() {
    }

    public SmartDevice(String marca, String modelo, String fabricante, String color, int anyoFabricacion, int duracionBateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.color = color;
        this.anyoFabricacion = anyoFabricacion;
        this.duracionBateria = duracionBateria;
    }

    @Override
    public String toString() {
        return "SmartDevice{" +
                "marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", color='" + color + '\'' +
                ", anyoFabricacion=" + anyoFabricacion +
                ", duracionBateria=" + duracionBateria +
                '}';
    }
}

//clases hijas
class SmartPhone extends SmartDevice{



        int almacenamiento;
        String resolucion;

        public SmartPhone() {
        }

      public SmartPhone(String marca, String modelo, String fabricante, String color, int anyoFabricacion, int duracionBateria, int almacenamiento, String resolucion) {
            super(marca, modelo, fabricante, color, anyoFabricacion, duracionBateria);
            this.almacenamiento = almacenamiento;
            this.resolucion = resolucion;
        }

    @Override
    public String toString() {
        return "SmartPhone{" +
                "almacenamiento=" + almacenamiento +
                ", resolucion='" + resolucion + '\'' +
                ", marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", color='" + color + '\'' +
                ", anyoFabricacion=" + anyoFabricacion +
                ", duracionBateria=" + duracionBateria +
                '}';
    }
}


class SmartWatch extends SmartDevice{

    String forma;
    String tipo;

    boolean cronometro;

    public SmartWatch() {
    }


    public SmartWatch(String marca, String modelo, String fabricante, String color, int anyoFabricacion, int duracionBateria, String forma, String tipo, boolean cronometro) {
        super(marca, modelo, fabricante, color, anyoFabricacion, duracionBateria);
        this.forma = forma;
        this.tipo = tipo;
        this.cronometro = cronometro;
    }

    @Override
    public String toString() {
        return "SmartWatch{" +
                "forma='" + forma + '\'' +
                ", tipo='" + tipo + '\'' +
                ", cronometro=" + cronometro +
                ", marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", color='" + color + '\'' +
                ", anyoFabricacion=" + anyoFabricacion +
                ", duracionBateria=" + duracionBateria +
                '}';
    }
}

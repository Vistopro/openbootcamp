package com.company;
import java.util.Scanner;
public class HelloWorld {

    public static void main (String[] args){

    Scanner scanner = new Scanner(System.in);
    System.out.println("Introduce un número en pantalla: ");
    float precio=scanner.nextFloat();

    System.out.println(precioIVA(precio));
    }

    static float precioIVA (float numero){

        return numero * 0.21f+numero;
    }


}

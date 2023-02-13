import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        //Introducimos un texto
        Scanner scanner= new Scanner(System.in);
        System.out.println("Ingrese un texto: ");
        String str=scanner.nextLine();

        System.out.println(reverse(str));

        //introducimos un array unidimensional por teclado
        int [] arrayUni= new int[8];
        for (int i = 0; i < arrayUni.length; i++) {
        
        //capturamos el error de que se meta en pantalla un texto
            try {
                Scanner sca= new Scanner(System.in);
                System.out.println("Ingrese los números (máximo 8 números): ");
                arrayUni[i] = sca.nextInt();
                if (arrayUni[i] < 0) {

                    System.out.println("El número " + arrayUni[i] + " no puede ser negativo");

                }

            } catch (InputMismatchException e) {
                System.out.println("No puedes introducir caracteres " + e.getMessage());
                    i--;
            }
        }
        arrayUnidimensional(arrayUni);
        
        
        //introducimos un arraybidimensional
        String[][] arrayBidi={{"a","b"},{"c","d"}};
        arrayBidimensional(arrayBidi);
    }


    //Función que devuelve cualquier texto del revés
    public static String reverse(String texto) {
       String textoReves= "";

        for (int i = texto.length() - 1; i >= 0; i--){

                textoReves += texto.charAt(i);
        }
        return textoReves;
    }

//funcion imprimir array unidimensional
public static void arrayUnidimensional(int[] array){

        for(int a: array){
            System.out.print(a);

        }
}

//función imprimir array bidimensional
public static void arrayBidimensional(String[][] array){

    for (String[] strings : array) {

        for (String string : strings) {

            System.out.print(string);
        }
    }

}
}

//Vectores------------------------------------------

import java.util.Vector;

public class Vectores {

    public static void main(String[] args) {

       Vector<Integer> vector= new Vector<>();

        vector.add(1);
        vector.add(2);
        vector.add(3);
        vector.add(4);
        vector.add(5);

        vector.removeElementAt(1);
        vector.removeElementAt(2);

        System.out.println(vector);
    }
}

//Array list and Linkedlist--------------------------------

import java.util.ArrayList;
import java.util.LinkedList;

public class EjercicioArrayList {

    public static void main(String[] args) {

        ArrayList<String> lista = new ArrayList<>();

        lista.add("hola");
        lista.add("soy");
        lista.add("Antonio");
        lista.add("José");

        System.out.println(lista);

        LinkedList<String> listaLinked = new LinkedList<>(lista);

        System.out.println(listaLinked);
    }
}

//Array list int--------------------------------------------

import java.util.ArrayList;

public class EjercicioArrayListint {

    public static void main(String[] args) {

        ArrayList<Integer> lista = new ArrayList<>();

        for(int i = 0; i < 10; i++){

            lista.add(i+1);
        }
        for (int i=0; i<lista.size(); i++){

            lista.removeIf(x -> x % 2 == 0);
        }
        System.out.println(lista);
    }

}

//Función divideporcero-----------------------------

import java.util.Scanner;

public class Dividirporcero {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese un numero: ");
        int a = scanner.nextInt();
        System.out.print("Ingrese un numero: ");
        int b = scanner.nextInt();
        try {
            int result = DividePorCero(a,b);
            System.out.println(result);
        }
        catch (ArithmeticException e) {
            System.out.println(e.getMessage()+" / Esto no puede hacerse");
        }finally {
            System.out.println("Demo de código");
        }
    }
    public static int DividePorCero(int a, int b) throws ArithmeticException {

            return a/b;
             }
}

import java.io.*;

public class CopiarFicheros {

    public static void main(String[] args)  {
        try {
            InputStream fichero = new FileInputStream("src/archivos.txt");


                byte[] datos = fichero.readAllBytes();
                 for (byte b : datos) {
                     System.out.println(b);
                 }
            fichero.close();

            PrintStream ficheroSalida= new PrintStream("src/archivos2.txt");
            ficheroSalida.write(datos);
            ficheroSalida.close();

        }
        catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}

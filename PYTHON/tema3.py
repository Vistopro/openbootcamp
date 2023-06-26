public class Main {
    public static void main(String[] args) {
        int param1=2;
        int param2=3;
        int param3=4;
        System.out.println(suma(param1,param2,param3));
        
        coche miCoche = new coche();
        miCoche.aumentarPuertas();
        System.out.println(miCoche.nPuertas);
    }

    static int suma(int a,int b,int c)
    {
        return a+b+c;

    }
}

class coche
{
    int nPuertas=0;

     public void aumentarPuertas()
     {
         this.nPuertas++;

     }

    }

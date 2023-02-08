package com.company.poo;
import java.util.List;
public interface CocheCRUD {

    void save ();

    void findAll();

    void delete();

}

package com.company.poo;

import java.util.List;

public class CocheCRUDImpl implements CocheCRUD {


    @Override
    public void save() {
        System.out.println("este es el metodo save");;
    }

    @Override
    public void findAll() {
        System.out.println("este es el metodo findAll");
    }

    @Override
    public void delete() {
        System.out.println("Este es el metodo delete");
    }
}



package com.company.poo;

public class HelloWorld {

    public static void main(String[] args) {
        CocheCRUD  coche = new CocheCRUDImpl();

        coche.save();
        coche.findAll();
        coche.delete();



        }

    }

import java.util.Scanner;

public class PintarRectan2{
    public static boolean pintar(String car,int base,int altura){

        boolean real = false;

        int nCar = car.length();

        if(base > 0 && altura > 0 && nCar < 1){
           real = true; 
        
        
            for(int i = 0;i <altura;i++){
                for(int j = 0;j<base;j++){
                    System.out.print(car + " ");
                }
                System.out.println();
            }
        }
        else
            System.out.println("No se ha dibujado el rectangulo");

        return real;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Introduce la base y la altura de un rectangulo:");
        int base = sc.nextInt();
        int altura = sc.nextInt();

        System.out.println();
        
        pintar(".",base, altura);

    }
}
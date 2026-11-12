import java.util.Scanner;

public class Inverso{
    
    
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

          int arrayNum[] = new int[10];

        System.out.println("Introduce los valores de tu array: ");

        escribirNum(arrayNum,sc);

        System.out.println("Los numeros introducidos son: ");

        for(int num : arrayNum){
            System.out.println(num);
        }

        leerInverso(arrayNum);
        

    }

    public static int[] escribirNum(int[] array,Scanner sc){
        for(int i = 0;i < array.length;i++){
            array[i] = sc.nextInt();
        }
        return array;
    }

    public static void leerInverso(int[] array){

        System.out.println("\nLos numeros inversos son: ");
        for(int i = array.length - 1; i >= 0;i--){
            System.out.println(array[i]);
        }
    }
}
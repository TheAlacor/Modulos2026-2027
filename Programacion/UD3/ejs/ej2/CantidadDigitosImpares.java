import java.util.Scanner;

public class CantidadDigitosImpares{

    

    public static int mostrarCantidad(int numero){
        int cantidadPar = 0;
        for(int i = 0;i<numero;i++){
            if(i % 2 != 0){
                cantidadPar++;
            }
        }
        return cantidadPar;
    }


    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Introduce un numero:");
        int numero = sc.nextInt();

        System.out.println(mostrarCantidad(numero));
    }
}
import java.util.Scanner;

public class PintarRectan{
    public static boolean pintar(int base,int altura){

        boolean real = true;
        if(base < 0 || altura < 0){
           real = false; 
        }

        for(int i = 0;i <altura;i++){
            for(int j = 0;j<base;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        return real;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Introduce la base y la altura de un rectangulo:");
        int base = sc.nextInt();
        int altura = sc.nextInt();

        System.out.println();
        
        pintar(base, altura);

    }
}
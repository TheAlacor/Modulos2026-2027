public class CuadradoCubo{

    public static void main(String[] args){
        int arrayInt[] = new int[20];
        int cuadrado[] = new int[20];
        int cubo[] = new int[20];
 
        alAzar(arrayInt);

        System.out.println("Array de numeros\n");

        for(int num : arrayInt){
            System.out.println(num);
        }

        cuadradoA(arrayInt,cuadrado);

        System.out.println("Array de numeros al cuadrado\n");

        for(int cuadrados : cuadrado){
            System.out.println(cuadrados);
        }

        cuboA(arrayInt,cubo);

        System.out.println("Array de numeros al cubo\n");

        for(int cubos : cubo){
            System.out.println(cubos);
        }

    }



    public static int[] alAzar(int[] array){
        for(int i = 0;i < array.length;i++){
            array[i] = (int)(Math.random() * (100 - 0 + 1)) + 0; 
        }
        return array;
    }

    public static int[] cuadradoA(int[] array,int[] cuadrado){
        for(int i = 0;i < array.length;i++){
            cuadrado[i] = array[i] * array[i]; 
        }
        return cuadrado;
    }

    public static int[] cuboA(int[] array, int[] cubo){
        for(int i = 0;i < array.length;i++){
            cubo[i] = array[i] * array[i] * array[i]; 
        }
        return cubo;
    }
}
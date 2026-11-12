public class Ejercicio1 {
    public static void main(String[] args){

        int arrayNum[] = new int[12];

        arrayNum[0] = 39;
        arrayNum[1] = -2;
        arrayNum[4] = 0;
        arrayNum[6] = 14;
        arrayNum[8] = 5;
        arrayNum[9] = 120;

        for(int num : arrayNum){
            System.out.println(num);
        }
    }
}

//Muestra valores segun el tipo de dato que sea, si es int,long, muestra 0 si es String "" y char ''.En otros casos null
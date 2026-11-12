public class Ejercicio2 {
    public static void main(String[] args){

        char arrayChar[] = new char[12];

        arrayChar[0] = 'a';
        arrayChar[1] = 'x';
        arrayChar[4] = '@';
        arrayChar[6] = ' ';
        arrayChar[7] = '+';
        arrayChar[8] = 'Q';
        

        for(char charac : arrayChar){
            System.out.println(charac);
        }
    }
}

//Muestra valores segun el tipo de dato que sea, si es int,long, muestra 0 si es String "" y char ''.En otros casos null
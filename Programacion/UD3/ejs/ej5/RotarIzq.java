public class RotarIzq{
    public static long rotarIzquierda(long numero) {
        long resultado = 0;
        String numStr = String.valueOf(numero);

        if(numStr.length() <= 1) {
            resultado = numero;
        }
        else {
            char primerDigito = numStr.charAt(0);
            String resto = numStr.substring(1);

            String resultadoStr = resto + primerDigito;

            resultado = Long.parseLong(resultadoStr);
        }
        return resultado;
    }
}
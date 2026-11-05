public class RotadorAvanzado {
    public static long rotarIzquierda(long numero, int n) {
        String numStr = String.valueOf(numero);
        long resultado = 0;
        int len = numStr.length();

        n = n % len;
        if(len <= 1) {
            resultado = numero;
        }
        else if(n == 0) {
            resultado = numero;
        }
        else{
            String parte1 = numStr.substring(0,n);
            String parte2 = numStr.substring(n);

            String resultadoStr = parte2 + parte1;

            resultado = Long.parseLong(resultadoStr);
        }

        return resultado;
    }

    public static long rotarDerecha(long numero, int n) {
        String numStr = String.valueOf(numero);
        long resultado = 0;
        int len = numStr.length();

        n = n % len;
        if(len <= 1) {
            resultado = numero;
        }
        else if(n == 0) {
            resultado = numero;
        }
        else{
            String parte1 = numStr.substring(len - n);
            String parte2 = numStr.substring(0,len - n);

            String resultadoStr = parte1 + parte2;

            resultado = Long.parseLong(resultadoStr);
        }

        return resultado;
    }
}
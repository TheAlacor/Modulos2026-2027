public class RotarDerecha{
    public static long rotarDerecha(long numero){
        long resultado = 0;
        String numStr = String.valueOf(numero);

        if(numStr.length() <= 1) {
            resultado = numero;
        }
        else
        {
            char ultimaCifra = numStr.charAt(numStr.length() - 1);

            String resto = numStr.substring(0, numStr.length() - 1);

            String resultadoStr = ultimaCifra + resto;
            resultado = Long.parseLong(resultadoStr);
        }

        return resultado;

    }
}
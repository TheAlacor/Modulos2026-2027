public class EsAfortunado {
	public static void sorteoNumeros(){
		int numAleatorio = (int) (Math.random() * (9 - 0 + 1));
		
		if(numAleatorio < 0 || numAleatorio > 9){
			System.out.println("Número no válido");
		}
		if(numAleatorio == 3 || numAleatorio == 7 || numAleatorio == 8 || numAleatorio == 9){
			System.out.println(numAleatorio + "El numero es Afortunado");
		}
		else{
			System.out.println(numAleatorio + "El numero es Desafortunado");
		}
	}
	
	public static void main(String[] args){
		sorteoNumeros();
	}
	
}
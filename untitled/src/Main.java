import java.util.Random;
public class Main {
    public static void main(String[] args) {
        Random rand = new Random();
        int a = rand.nextInt(1);
        int b = 10;
        int somma = somma(a, b);
        System.out.println(somma);
    }
    public static int somma(int a, int b) {
        int somma = a + b;
        return somma;
    }
}

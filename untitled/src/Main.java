
public class Main {
    public static void main(String[] args) {
        long pid = ProcessHandle.current().pid();
        System.out.println(pid);
        int a = 5;
        int b = 10;
        int somma = somma(a, b);
        System.out.println(somma);
    }
    public static int somma(int a, int b) {
        int somma = a + b;
        return somma;
    }
}

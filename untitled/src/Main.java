public class Main {

    public static void main(String[] args) {
        int h = 3;
        int i = 20;
        int j = h;

        foo(j);
    }

    public static void foo(int x) {
        int y = 10;
        int z = y;

        baz(z);
        bar(x, z);
    }

    public static void bar(int a, int b) {
        int c = 5;
        Integer d = new Integer(5);
        int e = d;

        baz(e);
    }

    public static void baz(int f) {
        int g = 100;
    }
}

package kyu7;

public class IntSqRoot {
    public static long IntRac(long n, long guess) {
        return DoIntRac(n, guess, 1);
    }

    private static long DoIntRac(long square, long guess, long iteration) {
        long nextGuess = (guess + square / guess) / 2;

        if (Math.abs(nextGuess - guess) < 1) {
            return iteration;
        } else {
            return DoIntRac(square, nextGuess, iteration + 1);
        }
    }
}

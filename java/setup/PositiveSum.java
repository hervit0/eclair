import java.util.Arrays;

public class PositiveSum {
    public static int sum(int[] arr) {
        return Arrays.stream(arr).filter(v -> v > 0).sum();
    }
}

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class SudokuValidator {
    public static boolean check(int[][] rowSudoku) {
        int[][] columnSudoku = getColumnSudoku(rowSudoku);

        List<Boolean> rowsCheck = checkCollectionUnicity(rowSudoku);
        List<Boolean> columnCheck = checkCollectionUnicity(columnSudoku);

        List<Boolean> checks = Stream.concat(rowsCheck.stream(), columnCheck.stream()).collect(Collectors.toList());
        return !checks.contains(false);
    }

    private static int[][] getColumnSudoku(int[][] rowSudoku) {
        // Mutation for efficiency, the pain with stream.reduce is real
        int[][] columnSudoku = new int[9][9];
        for (int i = 0; i < rowSudoku.length; i++) {
            for (int j = 0; j < rowSudoku.length; j++) {
                columnSudoku[i][j] = rowSudoku[j][i];
            }
        }

        return columnSudoku;
    }

    private static List<Boolean> checkCollectionUnicity(int[][] grid) {
        return Arrays.asList(grid).stream().map(SudokuValidator::checkUnicity).collect(Collectors.toList());
    }

    private static boolean checkUnicity(int[] suite) {
        int[] sortedSuite = Arrays.stream(suite).sorted().toArray();
        int[] correctSuite = IntStream.rangeClosed(1, 9).toArray();

        return Arrays.equals(sortedSuite, correctSuite);
    }

    public static void main(String[] args) {
        int[][] sudoku = { { 5, 3, 4, 6, 7, 8, 9, 1, 2 }, { 6, 7, 2, 1, 9, 5, 3, 4, 8 }, { 1, 9, 8, 3, 4, 2, 5, 6, 7 },
                { 8, 5, 9, 7, 6, 1, 4, 2, 3 }, { 4, 2, 6, 8, 5, 3, 7, 9, 1 }, { 7, 1, 3, 9, 2, 4, 8, 5, 6 },
                { 9, 6, 1, 5, 3, 7, 2, 8, 4 }, { 2, 8, 7, 4, 1, 9, 6, 3, 5 }, { 3, 4, 5, 2, 8, 6, 1, 7, 9 } };

        // System.out.print(Arrays.toString());
        System.out.print(SudokuValidator.check(sudoku));
    }
}

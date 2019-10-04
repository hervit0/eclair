package kyu8;

import java.util.Arrays;

public class TotalPoints {

    public static int points(String[] games) {
        return Arrays.stream(games).map(TotalPoints::applyRule).reduce(0, Integer::sum);
    }

    private static int applyRule(String game) {
        String[] parts = game.split(":");
        int ourScore = Integer.parseInt(parts[0]);
        int theirScore = Integer.parseInt(parts[1]);

        if (ourScore > theirScore) {
            return 3;
        } else if (ourScore < theirScore) {
            return 0;
        } else {
            return 1;
        }
    }

}

// Using compareTo directly on String
//public class TotalPoints {
//
//    public static int points(String[] games) {
//        return Stream.of(games).mapToInt(TotalPoints::scoreMatchResult).sum();
//    }
//
//    private static int scoreMatchResult(String score) {
//        String[] split = score.split(":");
//        int comparison = split[0].compareTo(split[1]);
//        if (comparison > 0)
//            return 3;
//        else if (comparison == 0)
//            return 1;
//        else
//            return 0;
//    }
//}

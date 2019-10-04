package kyu7;

import java.util.HashMap;

public class EasyWallpaper {
    public String wallpaper(double l, double w, double h) {
        if (l * w * h == 0) {
            return "zero";
        }

        double area = 2 * (l + w) * h * 1.15;
        double rollArea = 0.52 * 10;
        int numberRolls = (int) Math.ceil(area / rollArea);
        return numberMap.get(numberRolls);
    }

    // Really uninteresting
    private static HashMap<Integer, String> numberMap = new HashMap<Integer, String>();

    static {
        numberMap.put(0, "zero");
        numberMap.put(1, "one");
        numberMap.put(2, "two");
        numberMap.put(3, "three");
        numberMap.put(4, "four");
        numberMap.put(5, "five");
        numberMap.put(6, "six");
        numberMap.put(7, "seven");
        numberMap.put(8, "eight");
        numberMap.put(9, "nine");
        numberMap.put(10, "ten");
        numberMap.put(11, "eleven");
        numberMap.put(12, "twelve");
        numberMap.put(13, "thirteen");
        numberMap.put(14, "fourteen");
        numberMap.put(15, "fifteen");
        numberMap.put(16, "sixteen");
        numberMap.put(17, "seventeen");
        numberMap.put(18, "eighteen");
        numberMap.put(19, "nineteen");
        numberMap.put(20, "twenty");
    }
}

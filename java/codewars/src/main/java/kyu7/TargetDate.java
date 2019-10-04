package kyu7;

import java.time.LocalDate;

public class TargetDate {
    public static String dateNbDays(double initialAmount, double targetAmount, double interestRatePerYear) {
        int days = getDays(initialAmount, targetAmount, interestRatePerYear / 36000, 0);
        return LocalDate.parse("2016-01-01").plusDays(days).toString();
    }

    private static int getDays(double amount, double targetAmount, double interestRatePerDay, int days) {
        if (amount > targetAmount) {
            return days;
        } else {
            return getDays(amount * (1 + interestRatePerDay), targetAmount, interestRatePerDay, days + 1);
        }
    }
}

// Or with a formula...
//    return LocalDate.of(2016, 1, 1).plusDays((long) Math.ceil(Math.log(a / a0) / Math.log(1 + p / 36000))).toString();

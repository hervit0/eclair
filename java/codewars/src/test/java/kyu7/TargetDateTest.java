package kyu7;

import static org.junit.Assert.*;
import org.junit.Test;


public class TargetDateTest {

    private static void testing(String actual, String expected) {
        assertEquals(expected, actual);
    }
    @Test
    public void test() {
        System.out.println("Fixed Tests dateNbDays");
        testing(TargetDate.dateNbDays(100, 101, 0.98), "2017-01-01");
        testing(TargetDate.dateNbDays(4281, 5087, 2), "2024-07-03");
        testing(TargetDate.dateNbDays(4620, 5188, 2), "2021-09-19");
        testing(TargetDate.dateNbDays(9999, 11427, 6), "2018-03-13");
        testing(TargetDate.dateNbDays(3525, 4822, 3), "2026-04-18");
        testing(TargetDate.dateNbDays(5923, 6465, 6), "2017-06-10");
        testing(TargetDate.dateNbDays(4254, 4761, 8), "2017-05-22");
        testing(TargetDate.dateNbDays(1244, 2566, 4), "2033-11-04");
        testing(TargetDate.dateNbDays(6328, 7517, 5), "2019-05-25");
        testing(TargetDate.dateNbDays(2920, 3834, 2), "2029-06-03");
        testing(TargetDate.dateNbDays(7792, 8987, 4), "2019-07-09");
    }
}



package kyu7;

import static org.junit.Assert.assertEquals;

public class ShapeAreaTest {
    @org.junit.Test
    public void exampleTests() {
        assertEquals(5, ShapeArea.shapeArea(2));
        assertEquals(13, ShapeArea.shapeArea(3));
        assertEquals(1, ShapeArea.shapeArea(1));
        assertEquals(41, ShapeArea.shapeArea(5));
    }
}

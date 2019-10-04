package kyu7;

import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;

public class EasyWallpaperTest {
    private EasyWallpaper easyWallpaper;

    @Before
    public void setUp() {
        easyWallpaper = new EasyWallpaper();
    }

    @After
    public void tearDown() {
        easyWallpaper = null;
    }

    @Test
    public void test1() {
        assertEquals("ten", easyWallpaper.wallpaper(4, 3.5, 3));
    }

    @Test
    public void test2() {
        assertEquals("sixteen", easyWallpaper.wallpaper(6.3, 4.5, 3.29));
    }

    @Test
    public void test3() {
        assertEquals("seventeen", easyWallpaper.wallpaper(6.3, 5.8, 3.13));
    }

    @Test
    public void test4() {
        assertEquals("zero", easyWallpaper.wallpaper(0.0, 3.5, 3.0));
    }
}


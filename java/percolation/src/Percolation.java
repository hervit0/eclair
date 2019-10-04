package percolation;

import edu.princeton.cs.algs4.WeightedQuickUnionUF;
import edu.princeton.cs.algs4.StdRandom;

public class Percolation {
    private int gridArrity;
    private int gridDimension;
    private boolean[] sitesStates;
    private int[] openSites;
    private WeightedQuickUnionUF grid;

    public Percolation(int n) {
        gridArrity = n * n;
        gridDimension = n;
        sitesStates = new boolean[gridArrity];
        openSites = new int[gridArrity];
        grid = new WeightedQuickUnionUF(gridArrity + 2);

        for (int i = 1; i <= gridDimension; i++) {
            grid.union(0, i);
        }

        for (int j = gridArrity; j > gridArrity - gridDimension; j--) {
            grid.union(gridArrity + 1, j);
        }

        for (int i = 0; i < gridArrity; i++) {
            openSites[i] = i;
            sitesStates[i] = false;
        }
    }

    public void open() {
        StdRandom.shuffle(openSites);
        int openSitesSize = openSites.length;

        int[] newOpenSites = new int[openSitesSize - 1];
        for (int i = 0; i < openSitesSize - 1; i++) {
            newOpenSites[i] = openSites[i];
        }

        int openSite = openSites[openSitesSize - 1];
        int[] openSiteCoordinates = getCoordinates(openSite);
        open(openSiteCoordinates[0], openSiteCoordinates[1]);

        openSites = newOpenSites;
    }

    public void open(int row, int col) {
        sitesStates[getOpenSitesIndex(row, col)] = true;
        int currentGridIndex = getGridIndex(row, col);

        int left = row - 1;
        int right = row + 1;
        int up = col - 1;
        int low = col + 1;

        if (left > 0) {
            joinAdjacent(left, col, currentGridIndex);
        }

        if (right < gridDimension) {
            joinAdjacent(right, col, currentGridIndex);
        }

        if (up > 0) {
            joinAdjacent(row, up, currentGridIndex);
        }

        if (low < gridDimension) {
            joinAdjacent(row, low, currentGridIndex);
        }
    }

    public boolean isOpen(int row, int col) {
        int gridIndex = getGridIndex(row, col);
        return sitesStates[gridIndex - 1];
    }

    // public boolean isFull(int row, int col) // is site (row, col) full?

    public int numberOfOpenSites() {
        return gridArrity - openSites.length;
    }

    public boolean percolates() {
        return grid.connected(0, gridArrity + 1);
    }

    private void joinAdjacent(int rowAdjacent, int colAdjacent, int currentGridIndex) {
        if (isOpen(rowAdjacent, colAdjacent)) {
            grid.union(currentGridIndex, getGridIndex(rowAdjacent, colAdjacent));
        }
    }

    private int getOpenSitesIndex(int row, int col) {
        return getGridIndex(row, col) - 1;
    }

    private int[] getCoordinates(int openSitesIndex) {
        int col = openSitesIndex / gridDimension;
        int row = openSitesIndex % gridDimension;
        int[] coordinates = {col + 1, row + 1};
        return coordinates;
    }

    private int getGridIndex(int row, int col) {
        return gridDimension * (row - 1) + col;
    }
}

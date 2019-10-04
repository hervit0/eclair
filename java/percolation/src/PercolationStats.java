package percolation;

import edu.princeton.cs.algs4.StdStats;
import percolation.Percolation;

public class PercolationStats {
    private double[] percolationPoints;
    private int gridDimension;
    private int gridArrity;
    private int trialsCount;

    public PercolationStats(int n, int trials) {
        percolationPoints = new double[trials];
        gridDimension = n;
        gridArrity = n * n;
        trialsCount = trials;

        for (int i = 0; i < trials; i++) {
            percolationPoints[i] = getPercolationPoint();
        }
    }

    private double getPercolationPoint() {
        Percolation percolation = Percolation(gridDimension);

        while (!percolation.percolates()) {
            percolation.open();
        }

        return (double) percolation.numberOfOpenSites() / gridArrity;
    }

    public double mean() {
        return StdStats.mean(percolationPoints);
    }

    public double stddev() {
        return StdStats.stddev(percolationPoints);
    }

    public double confidenceLo() {
        return mean() - ((1.96 * stddev()) / Math.sqrt(trialsCount));
    }

    public double confidenceHi() {
        return mean() - ((1.96 * stddev()) / Math.sqrt(trialsCount));
    }

    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        int trials = Integer.parseInt(args[1]);
        PercolationStats percolationStats = PercolationStats(n, trials);

        String mean = "mean                    = " + percolationStats.mean() + "\n";
        String stddev = "stddev                  = " + percolationStats.stddev() + "\n";
        String confidence = "95% confidence interval = [ " + percolationStats.confidenceLo() + ", " + percolationStats.confidenceHi() + " ]\n";

        System.out.print(mean);
        System.out.print(stddev);
        System.out.print(confidence);
    }
}

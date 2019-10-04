# Percolation

Run the thing:

```
javac-algs4 Percolation.java
java-algs4 Percolation
```

Notes:
- The `algs4` tool is required, and can be found [here](https://algs4.cs.princeton.edu/mac/).
- The exercise has some constraints in term of libraries: StdIn, StdOut, StdRandom, StdStats, WeightedQuickUnionUF, and java.lang. That's why there's no fancy things like Stream or even List.

Debugging
```
    public static void main(String[] args) {
        Percolation percolation = new Percolation(3);

        for (int i = 0; i < 9; i++) {
            percolation.open();
            System.out.print("\n");
            System.out.print(percolation.percolates());
            System.out.print(percolation.numberOfOpenSites());
            System.out.print("\t");
            System.out.print(percolation.isOpen(1,1));
            System.out.print("\t");
            System.out.print(percolation.isOpen(1,2));
            System.out.print("\t");
            System.out.print(percolation.isOpen(1,3));
            System.out.print("\t");
            System.out.print(percolation.isOpen(2,1));
            System.out.print("\t");
            System.out.print(percolation.isOpen(2,2));
            System.out.print("\t");
            System.out.print(percolation.isOpen(2,3));
            System.out.print("\t");
            System.out.print(percolation.isOpen(3,1));
            System.out.print("\t");
            System.out.print(percolation.isOpen(3,2));
            System.out.print("\t");
            System.out.print(percolation.isOpen(3,3));
        }
    }
```

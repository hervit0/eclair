#include <stdio.h>
#include <stdlib.h>

int main()
{
  int i, j;
  int rows = 3;
  int cols = 3;
  /* TODO: define the 2D pointer variable here */
  int **pnumbers;

  /* TODO: complete the following line to allocate memory for holding three rows */
  pnumbers = (int **)malloc(rows * sizeof(int *));
  // Below won't work as sizeof(int *) is different from sizeof(int)
  // pnumbers = (int **)malloc(rows * sizeof(int));

  /* TODO: allocate memory for storing the individual elements in a row */
  pnumbers[0] = (int *)malloc(cols * sizeof(int));
  pnumbers[1] = (int *)malloc(cols * sizeof(int));
  pnumbers[2] = (int *)malloc(cols * sizeof(int));

  pnumbers[0][0] = 1;
  pnumbers[1][0] = 1;
  pnumbers[1][1] = 1;
  pnumbers[2][0] = 1;
  pnumbers[2][1] = 2;
  pnumbers[2][2] = 1;

  for (i = 0; i < 3; i++)
  {
    for (j = 0; j <= i; j++)
    {
      printf("%d", pnumbers[i][j]);
    }
    printf("\n");
  }

  for (i = 0; i < 3; i++)
  {
    /* TODO: free memory allocated for each row */
    free(pnumbers[i]);
  }

  /* TODO: free the top-level pointer */
  free(pnumbers);

  return 0;
}

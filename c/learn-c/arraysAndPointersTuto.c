#include <stdio.h>
#include <stdlib.h>

// So when is this useful? Remember that while declaring an array, the number of elements that it would contain must be known beforehand. Therefore, in some scenarios it might happen that the space allocated for an array is either too less than the desired space or too much more. However, by using dynamic memory allocation, one can allocate just as much memory as required by a program. Moreover, unused memory can be freed as soon as it is no longer required by invoking the free() function. On the down side, with dynamic memory allocation, one must responsibly call free() wherever relevant. Otherwise, memory leaks would occur.

int main()
{
  // Allocate memory to store five characters
  int n = 5;
  char *pvowels = (char *)malloc(n * sizeof(char));
  int i;

  pvowels[0] = 'A';
  pvowels[1] = 'E';
  *(pvowels + 2) = 'I';
  pvowels[3] = 'O';
  *(pvowels + 4) = 'U';

  for (i = 0; i < n; i++)
  {
    printf("%c ", pvowels[i]);
  }

  printf("\n");

  free(pvowels);
  return 0;
}

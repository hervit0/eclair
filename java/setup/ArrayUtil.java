public class ArrayUtil {
    // private static Object remove(Object array, int index) {
    //     int length = getLength(array);
    //     if (index < 0 || index >= length) {
    //         throw new IndexOutOfBoundsException("Index: " + index + ", Length: " + length);
    //     }

    //     Object result = Array.newInstance(array.getClass().getComponentType(), length - 1);
    //     System.arraycopy(array, 0, result, 0, index);
    //     if (index < length - 1) {
    //         System.arraycopy(array, index + 1, result, index, length - index - 1);
    //     }

    //     return result;
    // }

    public static int[] removeElement(int[] arr, int element) {
        int remIndex = 0;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == element) {
                remIndex = i;
                break;
            }
        }

        return removeElementFromIndex(arr, remIndex);
    }

    public static int[] removeElementFromIndex(int[] arr, int remIndex) {
        int numElts = arr.length - (remIndex + 1);
        System.arraycopy(arr, remIndex + 1, arr, remIndex, numElts);
        return arr;
    }

    public static void main(String[] args) {
        int[] data = { 10, 20, 30, 40, 50, 60, 71, 80, 90, 91 };
        System.out.print(data.length);
        int[] y = removeElement(data, 80);
        System.out.print(y.length);
    }
}

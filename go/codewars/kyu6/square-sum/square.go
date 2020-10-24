package square_sum

import "math"

func Solve(n int) int {
	for i := 1; i < 429235524; i++ {
		if isPerfectSquare(i) && isPerfectSquare(i+n) {
			return i
		}
	}

	return -1
}

func isPerfectSquare(x int) bool {
	return math.Mod(math.Sqrt(float64(x)), 1.0) == 0
}

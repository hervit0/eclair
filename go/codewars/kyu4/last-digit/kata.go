package last_digit

import (
	"log"
	"math"
	"strconv"
)

func LastDigit(as []int) int {
	if len(as) <= 0 {
		return 1
	}

	return int(recursivePow(as, 1.0))
}

func recursivePow(numbers []int, acc float64) float64 {
	if len(numbers) <= 0 {
		return acc
	}

	lastNumber := numbers[len(numbers)-1:][0]
	log.Print(acc)
	log.Print(numbers)
	log.Printf("pow %f with %f", lastDigit(lastNumber), acc)

	return recursivePow(numbers[:len(numbers)-1], lastDigit(int(math.Pow(lastDigit(lastNumber), acc))))
}

func lastDigit(number int) float64 {
	s := strconv.Itoa(number)
	l, _ := strconv.ParseFloat(s[len(s)-1:], 64)
	return l
}

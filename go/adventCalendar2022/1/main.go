package main

import (
	log "github.com/sirupsen/logrus"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	f, _ := os.ReadFile("adventCalendar2022/1/input.txt")
	ss := string(f)
	part1(ss)
	part2(ss)
}

func part1(ss string) {
	interElvesSep := "\r\n\r\n"
	interElfSep := "\r\n"
	interElves := strings.Split(ss, interElvesSep)

	maxCalory := 0
	for _, elf := range interElves {
		elfCalories := strings.Split(elf, interElfSep)
		count := 0
		for _, caloryStr := range elfCalories {
			calory, _ := strconv.Atoi(caloryStr)
			count = count + calory
		}

		log.WithField("count", count).Info("count")
		if count > maxCalory {
			maxCalory = count
		}
	}

	log.WithField("maxCalory", maxCalory).Info("part 1 answer")
}

func part2(ss string) {
	interElvesSep := "\r\n\r\n"
	interElfSep := "\r\n"
	interElves := strings.Split(ss, interElvesSep)

	elvesCalories := make([]int, len(interElves))
	for idx, elf := range interElves {
		elfCalories := strings.Split(elf, interElfSep)
		count := 0
		for _, caloryStr := range elfCalories {
			calory, _ := strconv.Atoi(caloryStr)
			count = count + calory
		}

		elvesCalories[idx] = count
	}

	sort.SliceStable(elvesCalories, func(i, j int) bool { return elvesCalories[i] > elvesCalories[j] })
	calories := 0
	for _, calory := range elvesCalories[0:3] {
		log.WithField("calory", calory).Info("calory")
		calories = calories + calory
	}

	log.WithField("calories", calories).Info("part 2 answer")
}

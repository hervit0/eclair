package main

import (
	log "github.com/sirupsen/logrus"
	"os"
	"strconv"
	"strings"
)

func main() {
	f, _ := os.ReadFile("adventCalendar2022/1/input.txt")
	//log.WithField("resp", string(f)).Info("input")

	ss := string(f)
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

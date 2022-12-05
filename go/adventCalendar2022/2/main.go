package main

import (
	log "github.com/sirupsen/logrus"
	"os"
	"strings"
)

func main() {
	f, e := os.ReadFile(`C:\Users\Hervinho\go\src\eclair\go\adventCalendar2022\2\input.txt`)
	if e != nil {
		log.WithError(e).Error("file loading")
	}
	ss := string(f)
	//log.WithField("ss", ss).Info("input")
	part1(ss)
	part2(ss)
}

func part1(ss string) {
	score := 0
	m := map[string]map[string]int{
		"A": {
			"X": 1 + 3,
			"Y": 2 + 6,
			"Z": 3 + 0,
		},
		"B": {
			"X": 1 + 0,
			"Y": 2 + 3,
			"Z": 3 + 6,
		},
		"C": {
			"X": 1 + 6,
			"Y": 2 + 0,
			"Z": 3 + 3,
		},
	}
	for _, xs := range strings.Split(ss, "\r\n") {
		x := strings.Split(xs, " ")
		score = score + m[x[0]][x[1]]
	}

	log.WithField("score", score).Info("part 1 answer")
}

func part2(ss string) {
	score := 0
	m := map[string]map[string]int{
		"A": {
			"X": 0 + 3,
			"Y": 3 + 1,
			"Z": 6 + 2,
		},
		"B": {
			"X": 0 + 1,
			"Y": 3 + 2,
			"Z": 6 + 3,
		},
		"C": {
			"X": 0 + 2,
			"Y": 3 + 3,
			"Z": 6 + 1,
		},
	}
	for _, xs := range strings.Split(ss, "\r\n") {
		x := strings.Split(xs, " ")
		score = score + m[x[0]][x[1]]
	}

	log.WithField("score", score).Info("part 1 answer")
}

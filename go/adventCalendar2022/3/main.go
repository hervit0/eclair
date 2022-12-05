package main

import (
	log "github.com/sirupsen/logrus"
	"os"
	"strings"
)

func main() {
	f, _ := os.ReadFile(`C:\Users\Hervinho\go\src\eclair\go\adventCalendar2022\3\input.txt`)
	ss := string(f)
	//log.WithField("ss", ss).Info("input")
	part1(ss)
	part2(ss)
}

func part1(ss string) {
	var score int32
	score = 0
	for _, xs := range strings.Split(ss, "\r\n") {
		xs1 := xs[:len(xs)/2]
		ys1 := xs[len(xs)/2:]
		c := findCommonSecond(xs1, ys1)
		score = score + scoreLetter(c)
	}

	log.WithField("score", score).Info("part 1 answer")
}

func part2(ss string) {
	sss := strings.Split(ss, "\r\n")
	chunks := chunkSlice(sss, 3)

	var score int32
	score = 0
	for _, chunk := range chunks {
		c := findCommonThird(chunk[0], chunk[1], chunk[2])
		log.WithFields(log.Fields{"chunk": chunk, "common": string(c)}).Info("common")
		score = score + scoreLetter(c)
	}

	log.WithField("score", score).Info("part 2 answer")
}

func findCommonSecond(xs, ys string) int32 {
	for _, xss := range xs {
		for _, yss := range ys {
			if yss == xss {
				return yss
			}
		}
	}
	return 0
}

func findCommonThird(xs, ys, zs string) int32 {
	type presence struct {
		a, b bool
	}
	m := make(map[int32]presence)
	for _, xss := range xs {
		m[xss] = presence{a: true}
	}
	for _, yss := range ys {
		if v := m[yss]; v.a {
			m[yss] = presence{b: true}
		}
	}
	for _, zss := range zs {
		if v := m[zss]; v.b {
			return zss
		}
	}
	return 0
}

func chunkSlice(slice []string, chunkSize int) [][]string {
	var chunks [][]string
	for i := 0; i < len(slice); i += chunkSize {
		end := i + chunkSize

		if end > len(slice) {
			end = len(slice)
		}

		chunks = append(chunks, slice[i:end])
	}

	return chunks
}

func scoreLetter(letterByte int32) int32 {
	switch letterByte > 95 {
	case true:
		return letterByte - 96
	default:
		return letterByte - 64 + 26
	}
}

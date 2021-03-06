package kata_test

import (
	kata "github.com/hervit0/eclair/go/codewars/kyu4/sum-by-factors"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"testing"
)

func Test(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Add that block and the 'testing' framework in the import")
}

func dotest(lst []int, exp string) {
	var ans = kata.SumOfDivided(lst)
	Expect(ans).To(Equal(exp))
}

var _ = Describe("SumOfDivided", func() {
	It("Basic tests", func() {
		lst1 := []int{12, 15}
		dotest(lst1, "(2 12)(3 27)(5 15)")

		lst2 := []int{15, 21, 24, 30, 45}
		dotest(lst2, "(2 54)(3 135)(5 90)(7 21)")

	})
})

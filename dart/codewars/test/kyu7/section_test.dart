import "package:test/test.dart";
import "package:codewars/kyu7/section.dart";

void main() {
  void testing(int n, List<int> a, int exp) => test("getSectionId($n, $a)", () => expect(getSectionId(n, a), equals(exp)));
  group('Basic tests', () {
    testing(1, [300, 200, 400, 600, 100], 0);
    testing(299, [300, 200, 400, 600, 100], 0);
    testing(300, [300, 200, 400, 600, 100], 1);
    testing(1599, [300, 200, 400, 600, 100], 4);
    testing(1600, [300, 200, 400, 600, 100], -1);
  });
}

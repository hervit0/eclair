int getSectionId(int n, List<int> a) {
  return doGetSection(n, a[0], a, 0);
  // return Scroll(n, a).getSectionId();
}

int doGetSection(int target, int position, List<int> sections, int sectionId) {
  if (target < position) {
    return sectionId;
  }

  int nextSectionId = sectionId + 1;
  if (nextSectionId == sections.length) {
    return -1;
  }

  return doGetSection(
      target, position + sections[nextSectionId], sections, nextSectionId);
}

class Scroll {
  int target;
  List<int> sections;

  Scroll(this.target, this.sections);

// https://stackoverflow.com/questions/13264230/what-is-the-difference-between-named-and-positional-parameters-in-dart
  int getSectionId({int position = 0, int sectionId = 0}) {
    if (this.target < position) {
      return sectionId;
    }

    int nextSectionId = sectionId + 1;
    if (nextSectionId == sections.length) {
      return -1;
    }

    int nextPosition = position + sections[nextSectionId];
    return this.getSectionId(position: nextPosition, sectionId: nextSectionId);
  }
}

// Lol
// int getSectionId(int n, List<int> a) => a.indexWhere((x) => (n -= x) < 0);

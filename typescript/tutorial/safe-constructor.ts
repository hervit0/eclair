interface Book {
  wow: number
  year: string
  title: string
}

interface Title {
  name: string
}

class BookCover {
  constructor(
    public book: Pick<Book, 'year' | 'title'>,
    public author: Pick<Title, 'name'>
  ) {
    this.book.wow; // compile error
  }
}

interface BookCoverBuilder {
  bookYear: string
  bookTitle: string
  authorName: string
}

class BookCoverMark2 {
  constructor(
    public bookCoverBuilder: BookCoverBuilder
  ) {
  }
}

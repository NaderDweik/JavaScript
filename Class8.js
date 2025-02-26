class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2024, 1, 1)),
  new Article("CSS", new Date(2023, 0, 1)),
  new Article("JavaScript", new Date(2025, 11, 1)),
];

console.log(articles.sort(Article.compare)); // Uses the static method

console.log(articles[0].title); //
console.log(articles[1].title); //
console.log(articles[2].title); //

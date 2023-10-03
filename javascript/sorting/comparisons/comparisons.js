const Movies = [
  {
    title: "Beetlejuice",
    year: 1988,
    genres: ["Comedy", "Fantasy"],
  },
  {
    title: "The Cotton Club",
    year: 1984,
    genres: ["Crime", "Drama", "Music"],
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Crime", "Drama"],
  },
  {
    title: "Crocodile Dundee",
    year: 1986,
    genres: ["Adventure", "Comedy"],
  },
  {
    title: "Valkyrie",
    year: 2008,
    genres: ["Drama", "History", "Thriller"],
  },
  {
    title: "Ratatouille",
    year: 2007,
    genres: ["Animation", "Comedy", "Family"],
  },
  {
    title: "City of God",
    year: 2002,
    genres: ["Crime", "Drama"],
  },
  {
    title: "Memento",
    year: 2000,
    genres: ["Mystery", "Thriller"],
  },
  {
    title: "The Intouchables",
    year: 2011,
    genres: ["Biography", "Comedy", "Drama"],
  },
  {
    title: "Stardust",
    year: 2007,
    genres: ["Adventure", "Family", "Fantasy"],
  },
];

//  One function will sort the movies by most recent year first.
//  One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s.

const sortByYear = (a, b) => {
  return b.year - a.year;
};

const sortByTitle = (a, b) => {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA < titleB) return -1;
  if (titleA > titleB) return 1;
  return 0;
};

console.log(Movies.sort(sortByYear));
console.log(Movies.sort(sortByTitle));

module.exports = { sortByYear, sortByTitle, Movies };

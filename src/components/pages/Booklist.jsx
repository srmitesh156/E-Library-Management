

const Booklist = () => {
  const trendingBooks = [
    { title: "Game of Thrones", status: "Borrow", image: "public/images/game-of-thrones.jpg" },
    // { title: "I don't love you anymore", status: "Not in Library", image: "#" },
    { title: "Twisted Lies", status: "Not in Library", image: "public/images/twisted-lies.jpg" },
    { title: "How to Win Friends", status: "Checked Out", image: "public/images/how-to-win-friends.jpg" },
    { title: "The Psychology of Money", status: "Not in Library", image: "public/images/the-psychology.png" },
    { title: "Harry Potter", status: "Checked Out", image: "public/images/harry-Potter.jpg" },
  ];

//   const classicBooks = [
//     { title: "Monsieur Monde Vanishes", status: "Borrow", image: "#" },
//     { title: "Ben Jonson", status: "Read", image: "#" },
//     { title: "Pebbles on the Shore", status: "Read", image: "#" },
//     { title: "Della Discorso", status: "Read", image: "#" },
//     { title: "The Up-bringing", status: "Read", image: "#" },
//     { title: "Verses Translations", status: "Read", image: "#" },
//   ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Trending Books Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Trending Books</h2>
          <div className="flex overflow-x-auto space-x-4">
            {trendingBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex-none w-48"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-sm font-semibold mb-2">{book.title}</h3>
                <button
                  className={`w-full py-2 text-sm font-medium rounded-lg ${
                    book.status === "Borrow"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : book.status === "Checked Out"
                      ? "bg-gray-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {book.status}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Classic Books Section */}
        {/* <section>
          <h2 className="text-xl font-bold mb-4">Classic Books</h2>
          <div className="flex overflow-x-auto space-x-4">
            {classicBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex-none w-48"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-sm font-semibold mb-2">{book.title}</h3>
                <button
                  className={`w-full py-2 text-sm font-medium rounded-lg ${
                    book.status === "Borrow"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {book.status}
                </button>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Booklist;
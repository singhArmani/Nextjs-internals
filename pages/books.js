import React from "react";

import Link from "next/link";
function Books({ books }) {
  return (
    <>
      <h1>Incremental Build</h1>
      <ul>
        {books.map((book) => (
          <li key={books.id}>{book.name}</li>
        ))}
      </ul>
      <Link href="/">Home</Link>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/books");
  const books = await res.json();
  return {
    props: { books },
  };
}
export default Books;

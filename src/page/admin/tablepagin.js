import React, { useState, useEffect } from "react";
import SweetPagination from "sweetpagination";
// import { books } from '../../StaticData/book'

export function Items() {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  // Example items, to simulate fetching from another resources.
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [book, setBook] = useState([]);

  // useEffect(() => {
  //     setBook(books)
  // }, [])

  return (
    <div>
      {currentPageData.map((item) => (
        <div>{item.name}</div>
      ))}

      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={10}
        getData={book}
        navigation={true}
      />
    </div>
  );
}

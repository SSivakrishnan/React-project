import React from "react";

const Pagination = ({ totalCharacters, PostsPerPage, paging }) => {
  var numberOfPages = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / PostsPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <div>
      {
        <ul className="pagination">
          {numberOfPages.map((number) => (
            <li className="page-item" key={number}>
              <a
                onClick={() => {
                  paging(number);
                }}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}{" "}
        </ul>
      }
    </div>
  );
};

export default Pagination;

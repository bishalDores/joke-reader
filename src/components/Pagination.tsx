import React from "react";
import {Link} from 'react-router-dom';

interface IPaginate{
    jokesPerPage:number;
    totalJokes:number;
    paginate:(arg0: number) => void;
}

const Pagination:React.FC<IPaginate> = ({ jokesPerPage, totalJokes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-end">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link onClick={() => paginate(number)}  to={''} className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

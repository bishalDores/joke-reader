import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { IJokeArray } from "../components/AddJokes";
import Pagination from "../components/Pagination";

const HomePage: React.FC = () => {
  const history = useHistory();
  const [jokes, setJokes] = useState<IJokeArray[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jokesPerPage] = useState<number>(5);

  useEffect(() => {
    // @ts-ignore
    const data = JSON.parse(localStorage.getItem("jokes"));

    setJokes(data ? data : []);
  }, []);

  const addNewJoke = () => {
    history.push("/jokes/add");
  };
  const indexOfLastJoke = currentPage * jokesPerPage;
  const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;
  let currentJokes = [...jokes];
  currentJokes = currentJokes.slice(indexOfFirstJoke, indexOfLastJoke);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="top-btns d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={addNewJoke}>
          <i className="fa fa-plus" aria-hidden="true" /> Add New Joke
        </button>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/jokes/play")}
        >
          <i className="fa fa-play" aria-hidden="true" /> Play Jokes
        </button>
      </div>
      <div className="jokes-list mt-4">
        <table className="table custom-table">
          <thead>
            <tr>
              <th scope="col">Joke</th>
              <th scope="col">Category</th>
              <th scope="col">Flags</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentJokes.length !== 0 ? (
              currentJokes.map((joke) => (
                <tr key={joke.id}>
                  <td>
                    {joke.content}
                    <br />
                    {joke.delivery ? joke.delivery : ""}
                  </td>
                  <td>{joke.category}</td>
                  <td>
                    {joke.flags
                      ? joke.flags.map((flag, index) => (
                          <span key={index}>{flag} </span>
                        ))
                      : ""}
                  </td>
                  <td>
                    <div className="d-flex">
                      <button
                        className="action-btn"
                        onClick={() => history.push(`/jokes/${joke.id}/edit`)}
                      >
                        <i
                          className="fa fa-info-circle mr-2"
                          aria-hidden="true"
                        />
                      </button>

                      <button
                        className="action-btn"
                        onClick={() => history.push(`/jokes/${joke.id}`)}
                      >
                        <i
                          className="fa fa-chevron-circle-right"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <>Loading....</>
            )}
          </tbody>
        </table>
        <Pagination
          jokesPerPage={jokesPerPage}
          totalJokes={jokes.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default HomePage;

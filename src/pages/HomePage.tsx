import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { IJokeArray } from "../components/AddJokes";

const HomePage: React.FC = () => {
  const history = useHistory();
  const [jokes, setJokes] = useState<IJokeArray[]>([]);

  useEffect(() => {
    // @ts-ignore
    const data = JSON.parse(localStorage.getItem("jokes"));

    setJokes(data ? data : []);
  }, []);

  const addNewJoke = () => {
    history.push("/jokes/add");
  };
  return (
    <>
      <div className="top-btns d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={addNewJoke}>
          <i className="fa fa-plus" aria-hidden="true" /> Add New Joke
        </button>
        <button className="btn btn-primary">
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
            {jokes.length !== 0 ? (
              jokes.map((joke) => (
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
                      <button className="action-btn">
                        <i
                          className="fa fa-info-circle mr-2"
                          aria-hidden="true"
                        />
                      </button>

                      <button className="action-btn" onClick={()=> history.push(`/jokes/${joke.id}`)}>
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
      </div>
    </>
  );
};

export default HomePage;

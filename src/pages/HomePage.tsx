import React from "react";
import { useHistory } from "react-router";

const HomePage: React.FC = () => {
  const history = useHistory();
  const addNewJoke = () => {
    history.push("/jokes/add");
  };
  return (
    <>
      <div className="top-btns d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={addNewJoke}>
          <i className="fa fa-plus" aria-hidden="true"></i> Add New Joke
        </button>
        <button className="btn btn-primary">
          <i className="fa fa-play" aria-hidden="true"></i> Play Jokes
        </button>
      </div>
    </>
  );
};

export default HomePage;

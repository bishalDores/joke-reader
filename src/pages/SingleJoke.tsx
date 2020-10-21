import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

type Joke = {
  category: string;
  type: string;
  flags: string[];
  content: string;
  delivery: string;
  id: string;
};
const SingleJoke: React.FC = () => {
  const history = useHistory();
  const [joke, setJoke] = useState<Joke>({
    category: "",
    type: "",
    flags: [],
    content: "",
    delivery: "",
    id: "",
  });
  const jokeId = history.location.pathname.split("/")[2];

  useEffect(() => {
    // @ts-ignore
    const data = JSON.parse(localStorage.getItem("jokes"));
    data.forEach(
      (d: {
        id: string;
        category: string;
        flags: [];
        content: string;
        delivery: string;
        type: string;
      }) => {
        if (d.id === jokeId) {
          setJoke(d);
        }
      }
    );
  }, []);
  console.log(joke);
  return (
    <div className="jumbotron">
      <h3>{joke.content}</h3>
      <div className="d-flex justify-content-between mt-4">
        <h5>{joke.category}</h5>
        <div>
          {joke.flags
            ? joke.flags.map((flag, index) => (
                <span key={index} className="mr-4">
                  {flag}
                </span>
              ))
            : ""}
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "66px 0" }}>
        <i
          className="fa fa-chevron-down"
          aria-hidden="true"
          style={{
            background: "darkgray",
            fontSize: "33px",
            width: "60px",
            height: "60px",
            lineHeight: "60px",
            borderRadius: "50%",
          }}
        />
      </div>

      <h3>{joke.delivery}</h3>
    </div>
  );
};

export default SingleJoke;

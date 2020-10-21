import React, { useState, useEffect } from "react";

type Joke = {
  category: string;
  type: string;
  flags: string[];
  content: string;
  delivery: string;
  id: string;
};
const PlayJokes: React.FC = () => {
  const [joke, setJoke] = useState<Joke>({
    category: "",
    type: "",
    flags: [],
    content: "",
    delivery: "",
    id: "",
  });

  const [totalData, setTotalData] = useState<number>(0);
  const [randomNum, setRandomNum] = useState<number>(0);
  const [delayDelivery, setDelayDelivery] = useState<string>("");
  const [jokeId, setJokeId] = useState<string>("");

  useEffect(() => {
    // @ts-ignore
    const data = JSON.parse(localStorage.getItem("jokes"));
    setTotalData(data.length);
    const jokeIdVal = data[randomNum].id;
    setJokeId(jokeIdVal);
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
          setTimeout(() => {
            setDelayDelivery(d.delivery);
          }, 3000);
        }
      }
    );
  }, [randomNum, totalData]);
  function generateRandomNum(min: number, max: number) {
    const num = Math.random() * (max - min) + min;
    setRandomNum(Math.floor(num));
    setDelayDelivery("");
  }

  return (
    <>
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
        <h3>{delayDelivery}</h3>
      </div>
      <button
        className="btn btn-success"
        onClick={() => generateRandomNum(0, totalData)}
      >
        Next
      </button>
    </>
  );
};

export default PlayJokes;
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

export interface IJokeArray {
  category: string;
  type: string;
  flags: string[];
  content: string;
  delivery: string;
  id: string;
}
const AddJokes: React.FC = () => {
  const history = useHistory();
  const [category, setCategory] = useState<string>("miscellaneous");
  const [type, setType] = useState<string>("single");
  const [flags, setFlags] = useState<string[]>([]);
  const [content, setContent] = useState<string>("");
  const [delivery, setDelivery] = useState<string>("");
  const [jokes, setJokes] = useState<IJokeArray[]>([]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    const id = uuidv4();
    const data = { id, category, type, flags, content, delivery };
    const tempArray = [...jokes];
    tempArray.push(data);
    setJokes(tempArray);
    localStorage.setItem("jokes", JSON.stringify(tempArray));
    history.push("/");
  };
  useEffect(() => {
    // @ts-ignore
    const data = JSON.parse(localStorage.getItem("jokes"));

    setJokes(data ? data : []);
  }, []);
  return (
    <div>
      <h2>Add New Joke</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="miscellaneous">Miscellaneous</option>
            <option value="pun">Pun</option>
            <option value="programming">Programming</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            className="form-control"
            id="type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="single">Single</option>
            <option value="twoPart">Two part</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="flags">Flags</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="nsfw"
              onChange={(e) => {
                const { value, checked } = e.target;
                if (checked) {
                  setFlags([...flags, value]);
                } else {
                  let temp = [...flags];
                  temp = temp.filter((val) => val !== value);
                  setFlags(temp);
                }
              }}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              NSFW
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="religious"
              onChange={(e) => {
                const { value, checked } = e.target;
                if (checked) {
                  setFlags([...flags, value]);
                } else {
                  let temp = [...flags];
                  temp = temp.filter((val) => val !== value);
                  setFlags(temp);
                }
              }}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Religious
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="political"
              onChange={(e) => {
                const { value, checked } = e.target;
                if (checked) {
                  setFlags([...flags, value]);
                } else {
                  let temp = [...flags];
                  temp = temp.filter((val) => val !== value);
                  setFlags(temp);
                }
              }}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              Political
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="racist"
              onChange={(e) => {
                const { value, checked } = e.target;
                if (checked) {
                  setFlags([...flags, value]);
                } else {
                  let temp = [...flags];
                  temp = temp.filter((val) => val !== value);
                  setFlags(temp);
                }
              }}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              Racist
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        {type === "twoPart" ? (
          <div className="form-group">
            <label htmlFor="delivery">Delivery</label>
            <textarea
              className="form-control"
              id="delivery"
              onChange={(e) => setDelivery(e.target.value)}
              value={delivery}
            ></textarea>
          </div>
        ) : (
          ""
        )}
        <button className="btn btn-info" type="submit">
          Add Joke
        </button>
      </form>
    </div>
  );
};

export default AddJokes;

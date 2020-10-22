import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddJokes from "./components/AddJokes";
import HomePage from "./pages/HomePage";
import SingleJoke from "./pages/SingleJoke";
import PlayJokes from "./pages/PlayJokes";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <div className="container">
          <Switch>
            <Route path="/jokes/add" component={AddJokes} />
            <Route path="/jokes/:id/edit" component={AddJokes} />
            <Route path="/jokes/play" component={PlayJokes} />
            <Route path="/jokes/:id/play" component={SingleJoke} />
            <Route path="/" component={HomePage} exact />
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;

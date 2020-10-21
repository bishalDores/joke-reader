import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddJokes from "./components/AddJokes";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <div className="container">
          <Route path="/jokes/add" component={AddJokes} />
          <Route path="/" component={HomePage} exact />
        </div>
      </main>
    </Router>
  );
};

export default App;

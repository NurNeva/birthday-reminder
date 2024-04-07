import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import List from "./List";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <section className="container">
        <div class>
        <h3 className="fs-2 text-center m-3 mb-4 text-success fw-bold">
          {people.length} Birthdays Today
        </h3>
        </div>
       
        <div className="people-container p-5">
          <List people={people} />
        </div>

        <div className="d-flex justify-content-center ">
          <button
            onClick={() => setPeople([])}
            className="fs-3 m-2 p-2 bg-success btn rounded fw-bold"
          >
            Clear All
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

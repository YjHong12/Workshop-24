import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // console.log("puppyList: ", puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup)

  return (
    <div className="App">
        {featPupId && (
    <div>
      <h2>{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
  )}
      {puppies.map((puppy) => {
        return (
          <button onClick={() => {setFeatPupId(puppy.id) }} key={puppy.id}>
            {" "}
            {puppy.name}
          </button>
        );
      })}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Axios from "axios";

export const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: [e.target.value]
    });
  };

  const handleSubmit = () => {
    Axios.post("http://localhost:3333/smurfs", smurf)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setSmurf({ name: "", age: "", height: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Smurf Name"
          type="text"
          name="name"
          value={smurf.name}
          onChange={handleChange}
        />
        <input
          placeholder="Smurf age"
          type="text"
          name="age"
          value={smurf.age}
          onChange={handleChange}
        />
        <input
          placeholder="Smurf Height"
          type="text"
          name="height"
          value={smurf.height}
          onChange={handleChange}
        />
        <button>Add Smurf</button>
      </form>
    </>
  );
};

export default SmurfForm;

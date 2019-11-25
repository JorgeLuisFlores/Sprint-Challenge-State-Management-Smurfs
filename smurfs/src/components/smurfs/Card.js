import React from "react";
import axios from "axios";

const SmurfCard = props => {
  function deleteSmurf(id) {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h3> Name: {props.smurf.name}</h3>
      <h4>Age: {props.smurf.age}</h4>
      <h5>Height: {props.smurf.height}</h5>
      <button
        onClick={e => {
          deleteSmurf(props.smurf.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SmurfCard;

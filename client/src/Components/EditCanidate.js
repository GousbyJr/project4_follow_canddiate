import React from 'react';
import { Redirect } from 'react-router-dom';

function EditCanidate(props) {
  return (
    <div>
      <h3>Add new candidate</h3>
      <form onSubmit={props.handleSubmit}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.canidateBio.photo}
          onChange={props.handleFormChange} />
        <p>Candidate's name:</p>

        <input
          type="text"
          name="name"
          value={props.canidateBio.name}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default EditCanidate;

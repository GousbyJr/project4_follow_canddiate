import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

function AddNewCanidate(props) {
    return (
      <div className="create-form" >
        <h2>Add a new Canidates</h2>
        <form onSubmit={props.newCanidate}>
          <p>Photo Link:</p>
          <input
            type="text"
            name="photo"
            value={props.canidateBio.photo}
            onChange={props.handleFormChange} />
            <p>Canidate's name:</p>
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
export default AddNewCanidate;

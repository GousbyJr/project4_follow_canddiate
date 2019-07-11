import React from 'react';
import { withRouter } from 'react-router-dom';

function EditCanidate(props) {
  return (
    <div>
      <h3>Create a new teacher</h3>
      <form onSubmit={props.handleSubmit}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.teacherForm.photo}
          onChange={props.handleFormChange} />
        <p>Teacher's name:</p>

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

export default withRouter(EditCanidate);

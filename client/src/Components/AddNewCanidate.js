import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

class AddNewCanidate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      partyAffliation: "",
      bio: "",
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await axios.post(
      `/canidates${
        this.props.match.params.categoryId
      }/allcandidates`,
      {
        name: this.state.name,
        description: this.state.bio,
        photo: this.state.photo,
        
      }
    );
    this.setState({
      redirect: true
    });
  }

  render() {

    return (
      <div id="create">
        {this.state.redirect ? (
          <Redirect to={`/allcandidates/${this.props.match.params.candidate}`} />
        ) : null}
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div>
          <label for="candidate name">Candidate's Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
          />
          </div>
          <div>
          <label for="party">Party Affiliation:</label>
          <input
            name="party"
            type="textarea"
            placeholder="Party"
            value={this.state.bio}
          />
          
          <button id="button" type="submit">Submit New Candidate</button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddNewCanidate;

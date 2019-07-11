import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

class  AllCanidates extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            canidatesArray: []
        };
    }
    
    async componentDidMount() {
        const response = await axios.get("/canidates");
        const canidatesArray = response.data.canidates;
        this.setState({
          canidatesArray
        });
      }
render () {
  return (
    <div className="canidates-container">
      {this.state.canidatesArray.map(canidate => (
        <div
          key={canidate.id}
          className="canidate-card"
          onClick={() => {
            this.state.history.push(`/canidates/${canidate.id}`);
            window.scrollTo(0, 0);
            
          
          }}>
          <img alt={canidate.name} src={canidate.photo} />
          <h3>
            <p>{canidate.name}</p>
          </h3>
        </div>
      ))}
      <div
        className="canidate-card"
        onClick={() => {
          this.state.history.push('/new/canidate');
          window.scrollTo(0, 0);
        }}>
        <img
          alt="Add a new canidate"
          src="#"
          className="plus-sign" />
        <h3>Add a new Canidate</h3>
      </div>
    </div>
  )
}
}
export default AllCanidates;
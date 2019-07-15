import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"


class  AllCanidates extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            Canidate:[] ,
            Canidate_name: []

        };
    }
    
    async componentDidMount() {
        const response = await axios.get("/canidates");
        const canidate = response.data;
        console.log(canidate)
        this.setState({
          Candidate: canidate
        });
      }
render () {
    console.log();
    
  return (
    <div className="candidates-container">
      {this.state.Canidate.map(canidate => (
        <div
        <Link className="link">
              to={`/candidate/${canidate.categoryId}/candidate/${canidate.id}/edit`}
            >
              <h3 className="canidate-name">{canidate.name}</h3>
              </Link>
          }}>
          <img alt={canidate.name } alt={canidate.bio} src={canidate.photo} />
           <p></p> 
        
        </div>
      ))}
      <div
        className="candidate-card"
        onClick={() => {
          this.state.history.push('/new/candidate');
          window.scrollTo(0, 0);
        }}>
        <img
          alt="Add a new candidate"
          className="plus-sign" />
        <h3>Add a new Candidate</h3>
      </div>
    </div>
  )


export default AllCanidates;
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


class  AllCanidates extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            Canidate:[] ,
            Canidate_name: []

        };
    }
    
    async componentDidMount() {
        const response = await axios.get("http://localhost:3000/canidates");
        const canidate = response.data;
        console.log(canidate)
        await this.setState({
          Canidate: canidate
        });
      }

render () {
    console.log();
    
  return (
    <div className="candidates-container">
      {this.state.Canidate.map(canidate => (
        <div>
        <Link className="link"
              to={`/candidate/${canidate.categoryId}/candidate/${canidate.id}/edit`}>
            
              </Link>
          <img alt={canidate.name }  src={canidate.photo} />

          <Link className="canidate-name">{canidate.name} </Link>
          
        
        </div>
      ))}
            <div className="candidate-card"
        onClick={() => {
          this.state.history.push('/new/candidate');
          window.scrollTo(0, 0);
        }}>
        
        <img
          alt="Add a new candidate"
          className="plus-sign" />
        <h3>Add a new candidate</h3>
      </div>
        </div>
        )}}

      

export default AllCanidates;
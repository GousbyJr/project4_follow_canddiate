import React, { Component } from 'react';
import EditCanidate from './EditCanidate'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class OneCanidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isEdit: false
        }
      }
    
      componentDidMount() {
        this.props.mountEditForm(this.props.id);
      }
      render() {
        const { canidate } = this.props;
        return (
          <div className="canidate-page">
            {canidate === undefined ? <h2>Loading . . .</h2> : (
              <div>
                <img alt={canidate.name} src={canidate.photo} />
                {this.state.isEdit ?
                  <Route path={'/canidates/:id/edit'} render={() => (
                    <EditCanidate
                      handleFormChange={this.props.handleFormChange}
                      handleSubmit={(e) => {
                        e.preventDefault();
                        this.props.editCanidate();
                        this.setState({ isEdit: false })
                        this.props.history.push(`/canidates/${this.props.canidateForm.id}`)
                      }}
                      canidateBio={this.props.canidateBio} />
                  )} />
                  :
                  <>
                    <h1>{canidate.name}</h1>
                    <button onClick={() => {
                      this.setState({
                        isEdit: true
                      })
                      this.props.history.push(`/canidates/${canidate.id}/edit`)
                    }}>Edit</button>
                    <button onClick={() => {
                      this.props.deleteCanidate(canidate.id);
                      this.props.history.push('/')
                    }}>Delete</button>
                  </>
                }
              </div>)}
          </div>)
      }
    }
    
    
    

export default withRouter(OneCanidate);

import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"


class AllCanidates extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            canidatesArray: []
        };
    }

    async componentDidMount() {
        const response = await axios.get("/c")
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AllCanidates;

import React, { Component } from 'react';
import { Link } from "react-router-dom";


class SignInPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password: "",
        };
    }
    
    render() {
        return (
            <div>
                <Link className="" to="/home"></Link>
            </div>
        );
    }
}

export default SignInPage;

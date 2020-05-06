import React, { Component } from 'react';
import Signin from './signin';

class Login extends Component {
    constructor(props){
        super(props)
    this.state = {email:"mobile number or email", password:"password"}

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
    this.setState({email: event.target.email, password: event.target.password});
}


handleSubmit(event){
    alert('form was successfully submitted')
    event.preventDefault();
}



    render() { 
        return ( 
            <div>
                
                <form onSubmit = {this.handleSubmit}>
                <h3>{this.props.greeting}</h3>
                <label>
                    Email or Phone
                    <input type="text" value = {this.state.email} onChange={this.handleChange}/>
                </label>

                <label>
                    Password
                    <input type= "text" value = {this.state.password} onChange= {this.handleChange}/>
                </label>

                <input type= "submit" value = "Login"/>

                <a href = "https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar">Forgot account?</a>

                </form>
            </div>
         );
    }
}
 
export default Login;
import React, { Component } from 'react';
import Login from './login';

class Signin extends Component {
    constructor(props){
        super(props);
    this.state= { firstname:'first name',
lastname:"Last name",email:"Email or phone number", password: 'Password' }

this.handleChange =  this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}




handleChange(event){
this.setState({firstname: event.target.firstname, lastname:event.target.lastname, email: event.target.email, password: event.target.password})
}

handleSubmit(event){
    alert(  'form was submitted successfully');
    event.preventDefault();

}

    render() { 
        const title = 'Sign Up';
        const subTitle = 'Its quick and easy'
        const greeting = 'welcome to facebook'
        return ( 
            <div>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
                

                <Login greeting={greeting}/>
                <form onSubmit={this.handleSubmit}>
                <label>
                    First name
                    <input type ="text" value={this.state.firstname} onChange={this.handleChange} />
                    </label>
                    
                    <label>
                        Last name
                        <input  type ="text" value={this.state.lastname} onChange={this.handleChange}/>
                    </label>
                    
                    <label>Email or phone number
                    <input type ="text" value={this.state.email} onChange={this.handleChange}/>
                    </label>

        
                    
                    <label>
                        Password (6 or more characters)
                        <input type ="text" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" button="SignUp"/>
                    
                    </form>
            </div>
         );
    }
}
 
export default Signin;


import React, { Component } from 'react'
import{Link} from 'react-router-dom'

export default class SignUpForm extends Component {
  render() {
    return (
        <div className="FormCenter">
        <form className="FormFields" >

<div className="FormField">
<label className="FormField__Label" htmlFor="name">Full Name</label>
<input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
</div>
<div className="FormField">
<label className="FormField__Label" htmlFor="password">Password</label>
<input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
</div>
<div className="FormField">
<label className="FormField__Label" htmlFor="email">E-mail Address</label>
<input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
</div>

<div className="FormField">
<label className="FormField__CheckboxLabel">
<input type="checkbox" className="FormFiled__Input" name="hasAgreed"/>
I agree all statement in <a href="" className="FormField__TermsLink">trems of service</a>
</label>

</div>
<div className="FormField">
<button className="FormField__Button mr-20">Sign Up</button>

<Link to="/sign-in" className="FormField__Link">I am already a member</Link>

</div>
</form>
      </div>
    )
  }
}

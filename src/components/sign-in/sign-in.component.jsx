import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            // Clears out inputs after successful sign-in
            this.setState({email: '', password: ''});
        }catch(err){
            alert(err.message);
        }

        this.setState({ email: '', password: ''});
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        //isGoogleSignIn is true by default
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput name='password' label='Password' type='password' value={this.state.password} handleChange={this.handleChange} required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;

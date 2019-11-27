import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Gallery from "./pages/gallery/gallery.component";
import Header from "./components/header/header.component";
import BulkOrders from "./pages/bulk-orders/bulk-orders.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        // onAuthStateChanged() : method from auth library from Firebase
        // auth.onAuthStateChanged(..) returns a function that closes the subscription
        // 'async' b/c will be making an async API requests
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            createUserProfileDocument(user);
            this.setState({ currentUser: user });
            //console.log(user);
        })
    }

    componentWillUnmount() {
        // required to prevent memory leak
        this.unsubscribeFromAuth();
    }

    render() {
        // exact is 'true' by default
        // Switch: the moment it finds a Route with an exact path, will not render any other Routes
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/bulk-orders' component={BulkOrders}/>
                    <Route path='/sign-in' component={SignInSignUpPage}/>
                </Switch>
            </div>
        );
    }

}

export default App;

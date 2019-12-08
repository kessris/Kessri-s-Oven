import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
//import './App.css';
import {GlobalStyle} from "./global.styles";
import HomePage from "./pages/homepage/homepage.component";
import Gallery from "./pages/gallery/gallery.component";
import Header from "./components/header/header.component";
import BulkOrders from "./pages/bulk-orders/bulk-orders.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ThisMonthsSales from "./pages/this-months-sales/this-months-sales.component";
import QnA from "./pages/q&a/q&a.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import HowToOrder from "./pages/how-to-order/how-to-order.component";
import Contact from "./pages/contact/contact.component";


class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        // onAuthStateChanged() : method from auth library from Firebase
        // auth.onAuthStateChanged(..) returns a function that closes the subscription
        // It is 'async' b/c will be making an async API requests
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                // documentSnapshot object allows us to check if a doc exists (using '.exists' property)
                // or get actual properties on object by calling .data() method which returns a JSON object of the document.
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                })
            } else
                // code below was PREV: this.setState({ currentUser: userAuth});
                setCurrentUser(userAuth); // equivalent to setting currentUser to null
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
                <GlobalStyle/>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/this-months-sales' component={ThisMonthsSales}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/bulk-orders' component={BulkOrders}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/how-to-order' component={HowToOrder}/>
                    <Route exact path='/q&a' component={QnA}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/sign-in' render={() =>
                        this.props.currentUser? <Redirect to='/'/> : <SignInSignUpPage/> }/>
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

/**
 * @function mapDispatchToProps: write over a state in redux store
 * @param dispatch: accepts any action objects from redux as parameter
 * @returns function that is equivalent to this.setState({...}) that will get passed down as props to a component
 */
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

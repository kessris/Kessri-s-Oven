import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Gallery from "./pages/gallery/gallery.component";
import Header from "./components/header/header.component";
import BulkOrders from "./pages/bulk-orders/bulk-orders.component";


function App() {
    // exact is 'true' by default
    // Switch: the moment it finds a Route with an exact path, will not render any other Routes
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/gallery' component={Gallery}/>
                <Route path='/bulk-orders' component={BulkOrders}/>
            </Switch>
        </div>
    );
}

export default App;

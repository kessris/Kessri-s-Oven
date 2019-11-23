import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";


function App() {
    // exact is 'true' by default
    // Switch: the moment it finds a Route with an exact path, will not render any other Routes
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
            </Switch>
        </div>
    );
}

export default App;

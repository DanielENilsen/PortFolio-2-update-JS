import React from 'react';
import ContactPage from "./Login/Login";
import HomePage from "./Homepage/Homepage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import ApiDisplayCall from "./cardsPage/ApiDisplayCall";




function Layout () { 
    return (
        <div>
            <Router>
            <div className = "header">
                <NavLink className = "header__link" to="/">GameList</NavLink>
                <NavLink className = "header__link" to="/contact">Login</NavLink>   
            </div>        
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/:id" component={ApiDisplayCall} />
            </Switch>
            </Router>

        </div>
    );

}

export default Layout;


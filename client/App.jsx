import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = ()=>{
    return (
    <Router>
    <div class='webpage'>
        <div class='title'>
            {/* title component */}
            Inner Stats
        </div>
        <div class='content'>
            <Switch>
                <Route exact path='/'>
                    {/* login Component */}
                </Route>
                <Route exact path="/stats">
                    {/* app page component */}
                </Route>
            </Switch>
        </div>
    </div>
    </Router>
    )
}

export default App
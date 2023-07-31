import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = ()=>{
    return (
    <Router>
    <div class='webpage'>
        <div class='title'>
            {/* title component */}
            Inner Stats
        </div>
        <div class='content'>
            <Router>
                <Route exact path='/'>
                    {/* login Component */}
                </Route>
                <Route exact path="/stats">
                    {/* app page component */}
                </Route>
            </Router>
        </div>
    </div>
    </Router>
    )
}

export default App
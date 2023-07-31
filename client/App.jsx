import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";


const App = ()=>{
    return (
        
    <div class='webpage'>
        <div class='title'>
            {/* title component */}
            Inner Stats
        </div>
        <BrowserRouter>
            <div class='content'>
                <Routes>
                    <Route exact path='/'>
                        {/* login Component */}
                    </Route>
                    <Route exact path="/stats">
                        {/* app page component */}
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
    )
}


export default App
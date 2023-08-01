import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Login from './components/Login.jsx';
import Stats from "./components/Stats.jsx";


const App = ()=>{
    return (
        <div>

            <Stats/>
        </div>
    // <div className='webpage'>
    //     <div className='title'>
    //         {/* title component */}
    //         InterStats
    //     </div>
    //     <BrowserRouter>
    //         <div className='content'>
    //             <Routes>
    //                 <Route exact path='/' element={<Login/>}/>
    //                 <Route exact path="/stats" element={<Stats/>}/>
    //             </Routes>
    //         </div>
    //     </BrowserRouter>
    // </div>
    )
}


export default App
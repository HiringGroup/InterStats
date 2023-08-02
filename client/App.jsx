import React, {useEffect, useState} from "react";
import { Routes, Route, Router, BrowserRouter, Navigate } from "react-router-dom";
import Login from './components/Login.jsx';
import Stats from "./components/Stats.jsx";


const App = ()=>{
    const [rerender, setRerender] = useState(false);

    useEffect(()=>{
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get('code')

        if(codeParam &&(localStorage.getItem("accessToken") === null)){
            async function getAccessToken(){
                await fetch('http://localhost:3000/getAccessToken?code=' + codeParam,{
                    method: 'GET'
                }).then((response)=>{
                    return response.json()
                }).then((data)=>{
                    console.log('data with access token: ', data)
                    if(data.access_token){
                        localStorage.setItem("accessToken", data.access_token)
                        setRerender(!rerender);
                    }
                })
            }
            getAccessToken()
        }
},[]);

    return (
    <div className='webpage'>
        <div className='title'>
            InterStats
        </div>
        <BrowserRouter>
            <div className='content'>
                <Routes>
                    <Route exact path='/' element={!localStorage.getItem('accessToken') ? <Login/> : <Navigate replace to={'/stats'} />}/>
                    <Route exact path="/stats" element={<Stats/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        {/* <Stats/> */}
    </div>
    )
}


export default App

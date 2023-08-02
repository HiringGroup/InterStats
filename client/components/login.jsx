import React, { useEffect } from "react"
const CLIENT_ID = process.env.GITHUB_CLIENT_ID


const Login = ()=>{
    function auth (){
        window.location.assign('https://github.com/login/oauth/authorize?client_id=' + '940b1bb8b7ca81379cff' + '&redirect_uri=http://localhost:8080/stats')
    }

    return (
        <div>
            <button onClick={auth}>OAuth for Github</button>
        </div>
    )
}

export default Login


//

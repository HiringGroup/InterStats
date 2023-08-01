import React from "react"


const Login = ()=>{
    return (
        <div>
            <button onClick={()=>{console.log(process.env.GITHUB_CLIENT_ID)}}>OAuth for Github</button>
        </div>
    )
}

export default Login


// location.href='https://github.com/login/oauth/authorize?' + {process.env.}
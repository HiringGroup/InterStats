import React, {useEffect} from "react"
const CLIENT_ID = process.env.GITHUB_CLIENT_ID
const CLIENT_SECRETS = process.env.GITHUB_CLIENT_SECRETS

const Stats = () => {
    
    return(
        <div>
            <p>Testing stat page</p>
            <button onClick={()=>{localStorage.removeItem("accessToken")}}>Logout</button>
        </div>
    )
}

export default Stats
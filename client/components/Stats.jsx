import React, {useEffect, useState} from "react"
const CLIENT_ID = process.env.GITHUB_CLIENT_ID
const CLIENT_SECRETS = process.env.GITHUB_CLIENT_SECRETS


const Stats = () => {
    const [userData, setUserData] = useState({})
    async function getUserData(){
        await fetch('http://localhost:3000/getUserData',{
            method: 'GET',
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem('accessToken')
            }
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            setUserData(data)
        })
    }
    
    return(
        <div>
            <p>Testing stat page</p>
            <button onClick={()=>{localStorage.removeItem("accessToken")}}>Logout</button>
            <button onClick={getUserData}>Get User Info</button>
        </div>
    )
}

export default Stats
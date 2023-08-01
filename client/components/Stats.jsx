import React, {useEffect, useState} from "react"
const CLIENT_ID = process.env.GITHUB_CLIENT_ID
const CLIENT_SECRETS = process.env.GITHUB_CLIENT_SECRETS
import groupShow from "./group.jsx"

const Stats = () => {
    const [userData, setUserData] = useState({})
    
    useEffect(()=>{
        getInfo()
    })
        
    // },[]);
    let user = 'daniel'
    let groupId = ''
    const groups = [] //list of group ids of the user
    const groupMembers = [] //list of lists of memebers in each group of the user
    const getInfo = async () =>{
        const info = await fetch('http://localhost:3000/user/stats/'+user)
        const data = await info.json();
        // console.log(data)
        await userGroupInfo();
        
        for(let x = 0; x< groups.length; x++){
            let groupID = groups[x]
            //fetch memebers of the group
            // console.log('group ids', groupID)
            const memberArray = await getGroupMembers(groupID);
            console.log('memb erarray',memberArray)
            groupMembers.push(
                <groupShow members={memberArray}/>
            )
        }
        console.log('list of memebers of different gorups', groupMembers)
    }

    
 
    const userGroupInfo = async () => {
        const groupList = await fetch('http://localhost:3000/user/getUserGroups/'+user);
        const data = await groupList.json();
        // console.log('this is usergroups',data);
        for(let i = 0; i < data.length; i++){
            // console.log(data[i])
            groups.push(data[i].groupid)
        }
        // console.log(groups)
    }
    const getGroupMembers = async (groupname) =>{
        const members = await fetch('http://localhost:3000/user/getGroups/'+groupname);
        const data = await members.json();
        const memberlist = []
        for (let i = 0; i < data.length; i++){
            memberlist.push(data[i].username)
        }
        // console.log('member list', memberlist)
        return memberlist
    }
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
            {/* <button onClick={getInfo}>fetch</button> */}
            <p>Testing stat page</p>
            <button onClick={()=>{localStorage.removeItem("accessToken")}}>Logout</button>
            <button onClick={getUserData}>Get User Info</button>
            {groupMembers}
            <div>
                
            </div>
        </div>
    )
}

export default Stats
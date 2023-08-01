import React, {useEffect} from "react"
import groupShow from "./group.jsx"

const Stats = () => {
    // useEffect(()=>{
    //     const queryString = window.location.search
    //     const urlParams = new URLSearchParams(queryString);
    //     const codeParam = urlParams.get('code')
    //     console.log(codeParam)
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
    return(
        <div>
            {/* <button onClick={getInfo}>fetch</button> */}
            <p>Testing stat page</p>
            {groupMembers}
            <div>
                
            </div>
        </div>
    )
}

export default Stats
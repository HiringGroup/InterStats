import React, {useState, useEffect } from "react";
import GroupShow from "./groupShow.jsx";


const Stats = () => {
    const [groupMembers, setGroupMembers] = useState([]);
    // useEffect(()=>{
    //     const queryString = window.location.search
    //     const urlParams = new URLSearchParams(queryString);
    //     const codeParam = urlParams.get('code')
    //     console.log(codeParam)
    useEffect( ()=>{
        console.log('gets')
         //gets groupIDs and puts into groups
        getInfo()
    }, []);

    // },[]);
    let user = 'daniel'
    const groups = [] //list of group ids of the user
//list of lists of memebers in each group of the user
    const getInfo = async () =>{
        console.log('called getinfo')
        await userGroupInfo();
        const info = await fetch('http://localhost:3000/user/stats/'+user)
        const data = await info.json();
        // console.log(data)
        // let groups = await userGroupInfo();
        console.log('inside getinfo ', groups)
        const memTemp = []
        for(let x = 0; x< groups.length; x++){

            let groupID = groups[x]
            // console.log(groupID)
            //fetch memebers of the group
            const memberArray = await getGroupMembers(groupID);
            console.log('member arry',memberArray)
            memTemp.push(
                <GroupShow key="{memberArray.id}" groupMembers={memberArray}/> //
            )
        }
        setGroupMembers(memTemp)
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
            memberlist.push(data[i]) // currently grabs all the users and associated data in the same group
            // console.log(data[i])

        }
        // console.log('member list', memberlist)
        return memberlist
    }
    return(
        <div>
            {/* <button onClick={getInfo}>fetch</button> */}
            <p>Testing stat page</p>
            {groupMembers}

        </div>
    )
}

export default Stats

import React, {useEffect} from "react"
import GroupShow from "./groupShow.jsx"

const Stats = () => {
    const [userData, setUserData] = useState({})

    useEffect(()=>{
        getInfo();
    })

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
                <GroupShow groupMembers={memberArray}/> //
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
    function logout(){
        localStorage.removeItem("accessToken")
        window.location.assign('http://localhost:8080/')
    }

    return(
        <div>
            <button onClick={logout}>Logout</button>
            <button onClick={getUserData}>Get User Info</button>
            {groupMembers}

        </div>
    )
}

export default Stats

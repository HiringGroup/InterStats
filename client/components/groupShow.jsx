import React from 'react'

const GroupShow = (props) => {
    const { username, sent, phoneinter, interview, offer, rejection, noreply, groupid } = props
    console.log('hello')
    const groupMember = props.groupMembers
    console.log('this is groupmember', groupMember)
    const visuals = []

    for (const members of groupMember){
        console.log('members in component', members)
        visuals.push(
            <div>
                <p> username: { members.username }</p>
                <p> sent: { members.sent }</p>
                <p> phone interviews: { members.phoneinter }</p>
                <p> interviews: { members.interview }</p>
                <p> offers: { members.offer }</p>
                <p> rejections: { members.rejection }</p>
                <p> no reply: { members.noreply }</p>
                <p> group name: { members.groupid }</p>
            </div>

        )
    }
    return (
        <div>
            <p>hello from groupShow</p>
            {visuals}
        </div>

    )
}

export default GroupShow;

import React from 'react'

const groupShow = (props) => {
    const groupMembers = props.groupMembers
    const visuals = []
    console.log('inside compoenent', groupMembers)
    for (members of groupMembers){
        visuals.push(
            <div>
                <p>hi</p>
            </div>
        )
    }
    return (
        <div>
            <p>hello</p>
            {/* {visuals} */}
        </div>
    )
}

export default groupShow;

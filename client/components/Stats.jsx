import React, {useEffect} from "react"


const Stats = () => {
    useEffect(()=>{
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get('code')
        console.log(codeParam)

        
    },[]);

    return(
        <div>
            <p>Testing stat page</p>
        </div>
    )
}

export default Stats
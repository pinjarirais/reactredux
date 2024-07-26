import React, { useEffect, useState } from 'react'

const useDataFetch = (url) => {
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        async function getdata(){
            let res = await fetch(url)
            let data = await res.json()
            setUserData(data)
        }
        getdata()
    }, [])

  return userData;
}

export default useDataFetch

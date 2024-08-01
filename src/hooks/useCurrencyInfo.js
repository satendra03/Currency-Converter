import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    let [data, setData] = useState({});
    useEffect(()=>{
        fetch(url).then((res)=> res.json()).then((res)=>setData(res[currency]))
    },[currency]);
    return data;
}

export default useCurrencyInfo;

// ok here i have created my custom hook and i am useing use Effect that re-renders the function or page when ever thre is a change in the dependency;

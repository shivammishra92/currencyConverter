import { useCallback, useEffect, useState } from "react"

//our custom hook
function useCurrencyInfo(currency){
    const[data,setData] = useState({})
    useEffect(()=>{
         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)//api calling
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
    },[currency])//depending on currency
    
    return data
}

export default useCurrencyInfo;
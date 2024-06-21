import { useState } from "react";
import { useEffect } from "react"

export const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetch(url)
       .then(res => res.json())
       .then(response => {
        setData(response);
        setIsLoading(false);
       })
       .catch(err => {
        setIsError(true);
        setIsLoading(false);
       })
    },[url])

    return {data,isError,isLoading}
}
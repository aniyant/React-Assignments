import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import { HomeReducer } from '../reducers/HomeReducer';

const initailData = () => {
    return {
        loading:false,
        error:false,
        data:[]
    }
}

export const Home = () => {
    const [state, dispatch] = useReducer(HomeReducer,{loading:false, error:false,data:[]});

    useEffect(() => {
        async function fetchData(){
            let response = await axios.get('https://api.first.org/data/v1/countries');
            return response.data;
        }

        try{
            dispatch({type:"LOADING_DATA"});
            fetchData().then((data) =>{
                dispatch({type:"LOADING_SUCCESS",payload:data});
            });
            console.log(response.data);
        }
        catch(error){
            dispatch({type:"LOADING_ERROR"});
            console.log(error);
        }
    },[])

    let data = [];
    for(const [key, value] of Object.entries(state.data)){
        data.push(<p>code:{key} info: country:{value.country} region:{value.region}</p>)
    }
  return (
    <div>
        <h1>Home Page</h1>
        {state.loading && <h1>Loading...</h1>}
        {state.error && <h1>Something went wrong</h1>}
        {data.map((element)=>{
            return element
        })}
    </div>
  )
}

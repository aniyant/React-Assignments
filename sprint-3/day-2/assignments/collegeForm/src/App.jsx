import { useState } from 'react'
import { useReducer } from 'react';
import './App.css'

const initialState = {
  name:'',
  establishment_year:'',
  address: {
    building:'',
    street:'',
    city: {
            name:'',
            locality: {
              pinCode:'',
              landmark:'',
            }
        },
    state:'',
    coordinates: { latitude:'', longitude:'' },
  },
courses_offered: []
}
const reducer = (state,{type,payload}) => {
  switch(type) {
    case "COLLEGE_NAME":
      return {...state,name:payload}
    case "ESTABLISHMENT_YEAR":
      return {...state,establishment_year:payload}
    case "BUILDING":
      return {...state,address:{...state.address,building:payload}}
    case "STREET":
      return {...state,address:{...state.address,street:payload}}
    case "CITY":
      return {...state,address:{...state.address,city:{...state.address.city,name:payload}}}
    case "STATE":
      return {...state,address:{...state.address,state:payload}}
    case "LATITUDE":
      return {...state,address:{...state.address,coordinates:{...state.address.coordinates,latitude:payload}}}
    case "LONGITUDE":
      return {...state,address:{...state.address,coordinates:{...state.address.coordinates,longitude:payload}}}
    case "PINCODE":
      return {...state,address:{...state.address,city:{...state.address.city,locality:{...state.address.city.locality,pinCode:payload}}}}
    case "LANDMARK":
      return {...state,address:{...state.address,city:{...state.address.city,locality:{...state.address.city.locality,landmark:payload}}}}
    case "COURSES_OFFERED":
      return {...state,courses_offered:payload}
    default:
      throw new Error("Invalid action");
  }
}

function App() {
  const [formState,dispatch] = useReducer(reducer,initialState);
  const [allColleges,setAllColleges] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllColleges((prev)=>{
      return [...prev,formState]
    })
    console.log(allColleges);
  }

  return (
    <>
      <div>
          <h1>College Details</h1>
          <form onSubmit={handleSubmit} style={{
              textAlign: 'left',
          }}>
            <label htmlFor='name'>College Name</label>
            <input type="text" name='name' placeholder='Enter college name' value={formState.name} onChange={(e)=>(dispatch({type:"COLLEGE_NAME",payload:e.target.value}))}/>
            <br/>
            <label htmlFor='establishment_year'>Establishment Year:</label>
            <input type="text" name='establishment_year' placeholder='Enter establishment year' value={formState.establishment_year} onChange={(e)=>(dispatch({type:"ESTABLISHMENT_YEAR",payload:e.target.value}))}/>
            <br/>
            <label htmlFor='address'>Address :</label>
            <br/>
            <input type="text" name='building' placeholder='Enter building name' value={formState.address.building} onChange={(e)=>(dispatch({type:"BUILDING",payload:e.target.value}))}/>
            
            <input type="text" name='street' placeholder='Enter street name' value={formState.address.street} onChange={(e)=>(dispatch({type:"STREET",payload:e.target.value}))}/>
            <input type="text" name='city' placeholder='Enter city name' value={formState.address.city.name} onChange={(e)=>(dispatch({type:"CITY",payload:e.target.value}))}/>
            <input type="text" name='landmark' placeholder='Enter landmark name' value={formState.address.city.locality.landmark} onChange={(e)=>(dispatch({type:"LANDMARK",payload:e.target.value}))}/>
            <input type="text" name='state' placeholder='Enter state name' value={formState.address.state} onChange={(e)=>(dispatch({type:"STATE",payload:e.target.value}))}/>
            <input type="text" name='latitude' placeholder='Enter latitude' value={formState.address.coordinates.latitude} onChange={(e)=>(dispatch({type:"LATITUDE",payload:e.target.value}))}/>
            <input type="text" name='longitude' placeholder='Enter longitude' value={formState.address.coordinates.longitude} onChange={(e)=>(dispatch({type:"LONGITUDE",payload:e.target.value}))}/>
            <input type="text" name='courses_offered' placeholder='Enter courses name separated by commas' value={formState.courses_offered.join(",")} onChange={(e)=>dispatch({type:"COURSES_OFFERED",payload:e.target.value.split(",")})}/>
            <button type='submit'>Add College</button>
          </form>
      </div>
      <div>
        <h1>All Colleges</h1>
          {allColleges.map((college,index)=>(
              <div key={index}>
                <p>college name:{college.name}</p>
                <p>establishment_year:{college.establishment_year}</p>
                <p>Address:</p>
                <p>building:{college.address.building}</p>
                <p>street:{college.address.street}</p>
                <p>city:{college.address.city.name}</p>
                {/* <p>pincode:{college.address.city.locality.pinCode}</p> */}
                <p>landmark:{college.address.city.locality.landmark}</p>
                <p>state:{college.address.state}</p>
                <p>latitude:{college.address.coordinates.latitude}</p>
                <p>longitude:{college.address.coordinates.longitude}</p>
                <p>couses offered:{college.courses_offered.join(",")}</p>
              </div>
          ))}
      </div>
    </>
  )
}

export default App

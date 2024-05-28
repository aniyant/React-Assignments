import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from'react';


function App() {
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);
  const [loadingStatus,setLoadingStatus] = useState("Loading...");
  useEffect(()=>{
    if(page === 1){
      document.title="componentMount";
      console.log(document.title);
    }
    else{
      document.title = "componentUpdate";
      console.log(document.title);
    }
      fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=2`)
   .then(res => res.json())
   .then(data => setData(data))
   .catch(error => console.log(error))
   .finally(()=>{
      setLoadingStatus("Loaded...");
      console.log(loadingStatus);
    });

   return () => {
    document.title = "componentUnmount";
    console.log(document.title);
   }
  
  },[page]);
  // console.log(data);
  useEffect(() => {
    window.addEventListener("load", () => {
      let f = document.getElementById('load').innerText === 'Loading...'
      if(f){
        document.getElementById('load').style.backgroundColor ="red";
      }
      else{
        document.getElementById('load').style.backgroundColor ="green";
      }
    });
  })

  return (
    <div className="App">
      <h1 id="load">{loadingStatus}</h1>
      {
        data.map((item,index)=>{
          return(
            <div key={index}>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
          )
        })
      }
      <div style={{display:"flex",justifyContent:"center",gap:"50px"}}>
      <button onClick={() => {setPage((prevPage) => prevPage-1);setLoadingStatus("Loading...")}} disabled={page===1}>Prev</button>
      <button onClick={() => {setPage((prevPage) => prevPage+1);setLoadingStatus("Loading...")}}>Next</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading , setLoading] = useState(true);
  const [tour,setTour] = useState([]);

  const fetchTours = async () =>{
    setLoading(true);
    const response = await fetch(url);
    const tour = await response.json();
    console.log(tour);
  }

  useEffect(()=>{
    fetchTours();
  },[])

  if(loading){
    return(
    <main>
      <Loading/>
    </main>
    );
  }

  return <main>
    <Tours/>
  </main>

}

export default App

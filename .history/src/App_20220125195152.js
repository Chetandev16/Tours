import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading , setLoading] = useState(false);
  const [tour,setTour] = useState([]);
  if(loading){
    return(
    <main>
      <Loading/>
    </main>
    );
  }

}

export default App

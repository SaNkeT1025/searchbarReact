import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseRqeuest(api) {
  const [data,setData] = useState();
  const [error, setError] = useState(null);
  
  useEffect(()=>{
   const  fetchdata = async () =>{
        try{
            let response = await axios.get(api);
            setData(response.data);
        }
        catch(err){
            setError(err)
        }
   } 
   fetchdata()
  },[api])
 

  
  

  return {
    data,error
  }
}

export default UseRqeuest
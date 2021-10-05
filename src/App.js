import React, {useEffect, useState} from "react";
import LinkLists from "./components/LinkLists"
import LinkForm from "./components/LinkForm"

//Grab all the link
//display all the link
//add delete and archive functionality

function App() {

  const [links, setLinks] = useState([])
  
  const loadLinks = async() => {
    try{
      const res = await fetch('/.netlify/functions/getLinks')
      const links = await res.json()
      setLinks(links)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    loadLinks()
  },[])

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Link Lists</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkLists links={links} refreshLinks={loadLinks}/>
    </div>
  );
}

export default App;

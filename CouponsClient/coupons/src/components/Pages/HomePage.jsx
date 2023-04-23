import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { itemsContext } from "../../context/itemContext";
export default function HomePage() {
  const [items, setItems] = useState([1,2,3]);
  const getItemsFromContext = useContext(itemsContext);
  const navigatingToHomePage = useNavigate();

  useEffect(() => {
    setItems(getItemsFromContext.items);
    console.log(getItemsFromContext.items);
    console.log(items+ 'maybe this works');
  }, [getItemsFromContext]);
  return <div>
    <h1>HomePage</h1>
    {
      items.length >= 0 ?(
        items.map(item=>{
        return <div key={item.id}><Link to={'/items'}>{item}</Link></div>})
      ):(<span>start</span>)
    } 
    
   
  
    </div>;
}
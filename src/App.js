import React, { useEffect,useState} from 'react';
import './App.css';
import Receipe from './Receipe';

export default function App (){

 
 
  const APP_ID = "df8617f9";
   const APP_KEY = "0e8be0645a2f42d9a255b69570ed1a2d";
 
  const [receipee, setNutrition] = useState([]);
  const [search ,setSearch] = useState("");
  const [query , setQuery] = useState('Paneer');


  useEffect(()=>{
    getReceipe();
  },[query]);


 const getReceipe= async ()=>{
   await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then ((res) => res.json())
       .then((recipes) => {
       setNutrition(recipes.hits);
       console.log(recipes.hits);
      })
 }


  

  const updateSearch = e =>{
   setSearch(e.target.value);
    console.log(search);
  };



  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");  
  };

  
  return (
    <div className="rece">
      <div className="back">
      <form onSubmit={getSearch} className="searchin element"> 
        <input className="searching .shadow-3"
          placeholder="Enter food items to get receipe"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      </div>
      <div class="detail">
    {receipee.map(r =>(
       <Receipe 
       key={r.recipe.label} 
       title={r.recipe.label}
       calories = {r.recipe.calories}
       image ={r.recipe.image}
       ingredients = {r.recipe.ingredients}
       totalTime = {r.recipe.totalTime}
       mealType = {r.recipe.mealType}
       />
    ))}
     </div>
     <div>
       <h2 className="tc">@ copyright Juhi Jha</h2>
     </div>
  
  
    </div>
    
      
           
  );
} 

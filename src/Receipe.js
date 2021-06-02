import React, { useState } from 'react'
import "./App.css"
import tachyons from "tachyons";


export default function Receipe({title,calories,image,ingredients,totalTime,mealType}) {

   
    return (
        
        <div className= "test o-90 br-50 .shadow-3">
            <h1 className="imgg name">{title}</h1>
             <img className="imgg br-100"src={image}/>
             <p className="align b"> Calories : {calories}</p>
             {/* <h3 className="align">
             Meal Type : {mealType}
            </h3> */}
             <h3 className="align">Ingredients:
            {ingredients.map(total =>(
            <li  className="align t"> {total.text}</li>
            ))}
          </h3>
           <h5 className="align b">Total Time To Prepare : {totalTime}Min</h5> 
           </div>
       
        
        
    )
}
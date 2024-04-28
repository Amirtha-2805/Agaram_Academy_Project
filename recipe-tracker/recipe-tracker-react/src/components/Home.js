import NavBar from "./Menu";
import "../styles/home.css"
import { useState } from "react";

const openAiAPI=process.env.NEXT_PUBLIC_OPENAI_API_KEY

export default function Home(){

    const question="What kind of dish can I make with these ingredients?"

    const[ingredientsInput,setIngredientsInput]=useState("")

    const submitIngredients=async()=>{
        // console.log("ingredients",ingredientsInput) 
        let url="https://api.openai.com/v1/chat/completions"
        let token=`Bearer ${openAiAPI}`
        let model='gpt-3.5-turbo'
        let ingredientsToSend={
            role:'user',
            content:ingredientsInput+question
        }

           let response=await fetch(url,{
            method:'POST',
            headers:{
                'Authorization':token,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                model:model,
                messages:ingredientsToSend
            })
        })
       let responseJson=await response.json()
       if(responseJson){
         console.log(responseJson)
       }
    }
    return(
        <>
            <NavBar/>
            <center>
            <div className="input-ingredients">        
                <label>Enter ingredients to get your special recipe..!</label>
                    <h6>Enter ingredients seperate by comma</h6>
                    
                        <div className="ingredients">                      
                            <input type="text" placeholder="Eg. Water,sugar" className="form-control" onKeyUp={(e)=>setIngredientsInput(e.target.value)}/>
                            <button type="button" className="btn btn-success" onClick={submitIngredients}>Submit</button>
                        </div>                                            
            </div>
            </center>
        </>

    )
}
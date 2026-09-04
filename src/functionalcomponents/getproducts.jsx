import  { useState } from 'react'

function Getproducts() {
  const [products,setproducts]=useState([])
  //get recipies is a funtion which will fetch the data from the api and return the data in json format
  const get_recipes=async ()=>{
  let response=await fetch('http://127.0.0.1:8000/recipes/')  
  response =await response.json()
  setproducts(response.recipes)
  }
  console.log(products,'products')
  return <div>

    <div><button onClick={get_recipes}>Get Recipes</button></div>
    {
     
    products.length>0?
    products.map((each_time)=><img style={{width:'250px'}} src={each_time.image} />)
    :"data loading......"
    }
      </div>
}
export default Getproducts
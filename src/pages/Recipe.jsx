import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAllRecipes } from '../redux/slice/recipeSlice'


const Recipe = () => {
  const {id}=useParams()
  // console.log(id);


  const dispatch=useDispatch()
  const [recipe,setRecipe]=useState({})

  useEffect(()=>{
    dispatch(fetchAllRecipes())
    if(sessionStorage.getItem("allRecipes"))
      {
        const allRecipes=JSON.parse(sessionStorage.getItem("allRecipes"))
        setRecipe(allRecipes?.find(item=>item.id==id))
      }
  },[])
  
  // console.log(recipe);
  
  return (
    <>
      <Header />
      <div style={{paddingTop:'100px'}} className="container mx-auto ">
        <div className="d-flex items-center p-4 ">
          <div>
            <img className='mt-4 shadow' height={'400px'} src={recipe?.image} alt="Recipe Image" />
          </div>
          <div className="p-3 ">
            <h1 className="fs-1 font-bold mb-3 text-warning">{recipe?.name}</h1>
            <div className="fs-5 font-semibold mb-5 text-primary">
              <span style={{textAlign:'justify'}} className='text-danger'>Ingredients:</span> {recipe?.ingredients}
            </div>
            <div style={{textAlign:'justify'}} className='fs-5 text-info'>
              <p className=" mb-1"><span className='text-danger'>Meal Type:</span> {recipe?.mealType}</p>
              <p className=" mb-1"><span className='text-danger'>Cuisine:</span> {recipe?.cuisine}</p>
              <p className="mb-1"><span className='text-danger'>Cooking Time:</span> {recipe?.cookTimeMinutes} minutes</p>
              <p className="mb-1"><span className='text-danger'>Servings:</span> {recipe?.servings}</p>
            </div>
            <p style={{textAlign:'justify'}}  className="fs-5 mt-4 text-success">
              <span className='text-danger'>Instructions:</span> {recipe?.instructions}
            </p>
          </div>
        </div>
      </div>


      
    </>
  )
}

export default Recipe
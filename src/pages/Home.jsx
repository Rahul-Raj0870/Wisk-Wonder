import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slice/recipeSlice'


const Home = () => {

  const dispatch = useDispatch()

  const { allRecipes, loading } = useSelector(state => state.recipeReducer)
 


  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allRecipes?.length / productPerPage)
  const currentPageLastProductIndex = currentPage * productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductCards = allRecipes?.slice(currentPageFirstProductIndex, currentPageLastProductIndex)


  useEffect(() => {
    dispatch(fetchAllRecipes())
  }, [])

  const navigateToNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  const navigateToPrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  

  return (
    <>
      <Header insideHome={true} />
      <div style={{marginBottom:'80px'}}>
        <section className="position-relative">
          <img style={{width:'100vw',height:'80vh'}} src="https://img.freepik.com/premium-photo/white-food-background-with-empty-white-board-tomatoes-free-space-text-top-view-copy-space_503274-1320.jpg" alt="" />
          <div className="bg-light d-flex justify-content-center aling-items-center position-absolute w-100 shadow" style={{top:'50%',transform:'translateY(-50%)',borderRadius:'100px 0px'}}>
            <div className="text-center p-3">
              <h2 className="text-warning">Welcome to Whisk & Wonder</h2>
              <p style={{color:'green'}}>
                Discover a world of flavors with our collection of recipes crafted by food enthusiasts.
                From gourmet dishes to easy meals, find your next culinary adventure right here.
              </p>
              <button  style={{backgroundColor:'#005F73'}} className="btn p-2 rounded text-light ">
                Explore Recipes
              </button>
            </div>
          </div>
        </section>
  
  
        <div id='recipes'  className=" px-4 auto py-10" >
          <h1 className='text-center py-5 text-danger'>CHECK OUT RECIPES</h1>
          {
            loading ?
              <div className='d-flex justify-content-center aling-items-center my-5 '>
                <img width={'550px'} height={'90px'} className='me-2' src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" />
              </div>
              :
              <>
                <div className='row row-gap-5 column-gap-2 '>
                  {
                    allRecipes?.length > 0 ?
                      visibleProductCards?.map(recipe => (
                        <div key={recipe?.id} className='col rounded border border-dark shadow text-center p-3 '>
                          <img width={'270px'} src={recipe.image} alt="No image" />
                          <div className='text-center'>
                            <h2 style={{color:'#005F73'}} className='font-semibold pt-3'>{recipe?.name}</h2>
                            <p className='text-danger'>Cuisine:{recipe?.cuisine}</p>
  
                            <p className='text-primary'>Time: {recipe?.cookTimeMinutes} minutes</p>
  
                            <p className='text-secondary'>Rating:  {recipe?.rating}/5</p>
  
                            <Link  style={{backgroundColor:'#005F73',textDecoration:'none'}} className=' text-white rounded p-2' to={`recipe/${recipe?.id}`}>View Recipe</Link>
                          </div>
                        </div>
                        
                        
                      ))
                      :
                      <div className='d-flex font-bold text-danger justify-content-center aling-items-center my-3 fs-3'>
                        No Recipes Found..
                      </div>
  
                  }
  
                </div>
                <div className="d-flex justify-content-center aling-items-center my-3" style={{marginBottom:'250px'}}>
                  <button
                    
                    onClick={navigateToPrevPage}
                    disabled={currentPage === 1}
                    className={`btn btn-primary text-white py-2 px-4 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <i className="fa-solid fa-backward"></i> Previous
                  </button>
  
                  <span className="mx-3 py-2">
                    Page {currentPage} of {totalPage}
                  </span>
  
                  <button
                 
                    onClick={navigateToNextPage}
                    disabled={currentPage === totalPage}
                    className={`btn btn-primary text-white py-2 px-4 rounded ${currentPage === totalPage ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    Next <i className="fa-solid fa-forward"></i>
                  </button>
                </div>
  
              </>
          }
        </div>
      </div>
    </>
  )
}

export default Home
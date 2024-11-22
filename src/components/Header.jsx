import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchCuisine } from '../redux/slice/recipeSlice'

const Header = ({insideHome}) => {
  const dispatch=useDispatch()

  return (
    <>
    <nav style={{backgroundColor:'tomato',height:'70px'}} className="position-fixed w-100 top-0 p-2 shadow z-2">
      <Link style={{textDecoration:'none'}} className="text-white fs-3 " to="/">
        <h3 style={{position:'absolute',top:'15px'}} className=' d-inline '><span className=' px-3' style={{color:'#0b7cf9'}}><i className="fa-solid fa-bowl-food "></i></span>Whisk & Wonder</h3>
      </Link>
      <ul style={{listStyle:'none'}} className="d-flex justify-content-center">
        <li className=" inline-block px-5 ">
          { insideHome &&<input onChange={e=>dispatch(searchCuisine(e.target.value.toLowerCase()))} className="form-control rounded p-1 mt-2" style={{ width: '500px' }} type="text" placeholder="Search Cuisine"/> }
        </li>
        
      </ul>
    </nav>
    </>
  )
}

export default Header
import React, { useState } from 'react'
import Navbar from './Navbar'
import bg1 from '../assets/background1.svg'
import bg2 from '../assets/background2.svg'
import { FiArrowUpRight } from 'react-icons/fi'
import { useEffect } from 'react'
import axios from 'axios'
import Recipescard from './Recipescard'
// import Popularrecipes from './Popularrecipes'
import { getUserID } from '../hooks/GetUserId'

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipe, setSavedRecipe] = useState();
  const [loading, setLoading] = useState(false);
  const userID = getUserID();
  useEffect(() => {

    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://recipeappserver.onrender.com/recipe");
        setRecipes(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(`https://recipeappserver.onrender.com/recipe/savedRecipes/${userID}`);
        setSavedRecipe(response.data.savedRecipes);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSavedRecipes();
    fetchRecipes();
  }, []);

  console.log(savedRecipe);

  // const isRecipeSaved = (id) => savedRecipe.includes(id);

  return (
    <>
      <Navbar />
      <div className='w-full h-screen flex items-center justify-center bg-[#ffeddf]'>
        <div>
          <img src={bg1} alt="recipes" className='lg:w-[320px] sm:w-[220px] w-[120px] object-cover absolute bottom-0 right-0' />
        </div>
        <div className='flex flex-col items-center justify-center sm:px-0 px-4'>
          <div className='sm:text-xl text-lg font-semibold  sm:mb-5 mb-3'><p>Let's cook food</p></div>
          <div className='lg:text-6xl sm:text-5xl text-4xl font-extrabold '><p>Bring out</p></div>
          <div className='lg:text-6xl sm:text-5xl text-4xl font-extrabold '><p>the <span className='text-red-500 '>Chef</span> in you</p></div>
          <div className='sm:text-xl text-lg font-semibold  sm:mt-5 mt-3 sm:mb-10 mb-5 text-center'><p>Discover recipes for various <span className='text-red-500 '>Cuisine</span></p></div>
          <div><button className='bg-red-500 sm:w-[180px] w-[160px] sm:px-8 px-7 sm:py-3 py-2 text-white font-semibold rounded-full'>Explore now</button></div>
        </div>
        <div>
          <img src={bg2} alt="recipes" className='lg:w-[320px] sm:w-[220px] w-[120px] object-cover absolute top-0 left-0' />
        </div>
      </div>
      <div className='w-full h-full lg:px-10 px-5 mt-10'>
        <div>
          <div>
            <p className='sm:text-3xl text-2xl font-semibold'>Recipes</p>
          </div>
          <div className='flex items-center justify-start gap-1 cursor-pointer'>
            <p className='text-lg font-medium text-red-500'>See all</p>
            <div className='text-red-500'><FiArrowUpRight /></div>
          </div>
        </div>
        <div>
          <Recipescard recipes={recipes} savedRecipe={savedRecipe} loading={loading} />
        </div>
      </div>
    </>
  )
}

export default Home
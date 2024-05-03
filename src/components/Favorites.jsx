import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getUserID } from '../hooks/GetUserId';
// import Cards from './Cards';
// import bg from '../assets/nofav.svg'
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Favrecipes from './Favrecipes';
import Loader from '../assets/loader.gif'


const Favorites = () => {

    const userID = getUserID();
    const [loading, setLoading] = useState(false);
    const [savedRecipes, setSavedRecipes] = useState();
    useEffect(() => {
        const fetchSavedRecipes = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://recipeappserver.onrender.com/recipe/savedRecipes/${userID}`);
                console.log(response.data);
                setSavedRecipes(response.data.savedRecipes);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchSavedRecipes();
    }, [])
    return (
        <>
            {loading ? (<div className='w-full h-screen flex items-center justify-center'><img src={Loader} alt="Loading" className='w-[150px]' /></div>) : (
                <div className='w-full h-full'>
                    <div className='absolute top-5 left-5 z-50 sm:flex hidden'>
                        <Link to='/'><BiArrowBack size={35} className="bg-white border border-gray-200 rounded-full p-2 hover:shadow-md duration-75" /></Link>
                    </div>
                    <div className='w-full h-full flex flex-col items-center justify-center mt-5'>
                        <div className='font-bold lg:text-5xl sm:text-4xl text-3xl mb-10'><p>Favorite <span className='text-red-500'>recipes</span></p></div>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 sm:gap-10 gap-4'>
                            {savedRecipes?.map((recipe, i) => (
                                <div item key={i}>
                                    <Favrecipes recipe={recipe} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* {
                    Number(savedRecipes.length()) > 0 ? (null) : (
                        <div className='w-full sm:h-[70vh] h-[60vh] flex flex-col items-center justify-center gap-10'>
                            <div>
                                <img src={bg} alt="No favorites" className='sm:w-[320px] w-[240px]' />
                            </div>
                            <div>
                                <p className='text-lg font-medium'>No Favorite yet</p>
                            </div>
                        </div>
                    )
                } */}
        </>
    )
}

export default Favorites
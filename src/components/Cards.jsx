import React, { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdPeopleAlt, MdAccessTimeFilled } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { getUserID } from '../hooks/GetUserId'
import axios from 'axios'

const Cards = ({ recipe, savedRecipe }) => {
    const userID = getUserID();
    const navigate = useNavigate();


    const savedRecipes = async (recipeID) => {
        try {
            const response = await axios.put("https://recipeappserver.onrender.com/recipe", { recipeID: recipeID, userID: userID });
            console.log(response);
            console.log(recipeID, userID);
        } catch (err) {
            console.log(err);
        }
    }
    console.log(savedRecipe);
    let isRecipeSaved;
    // let found = false;
    savedRecipe?.map((save) => {
        if (save._id == recipe._id) {
            isRecipeSaved = true;
            // found = true;
        }
        // isRecipeSaved = save.includes(recipe._id);
        console.log(isRecipeSaved);
    })
    return (
        <div>
            <div className='sm:w-[320px] w-[280px] h-[480px] border border-gray-100 px-2 py-2'>
                <div>
                    <div className='relative'>
                        <img src={recipe.imageUrl1} alt={recipe.name} className="w-[380px] h-[240px] object-cover mb-8" />
                        <div className="absolute top-4 right-4" >
                            <button className='bg-white p-2 rounded-full' onClick={() => savedRecipes(recipe._id)} disabled={isRecipeSaved}>
                                {isRecipeSaved ? (
                                    <AiFillHeart fontSize={20} />
                                ) : (
                                    <AiOutlineHeart fontSize={20} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4 mb-2'>
                    <div className='flex items-center justify-center gap-1'>
                        <div>
                            <AiFillStar />
                        </div>
                        <div>
                            <p className='text-gray-500'>{recipe.rating}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <div>
                            <MdPeopleAlt />
                        </div>
                        <div>
                            <p className='text-gray-500'>{recipe.servings}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-lg font-semibold'>{recipe.name}</p>
                    <p className='text-gray-500 mb-8'>{recipe.description.slice(0, 50)}...</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-1'>
                        <div>
                            <MdAccessTimeFilled />
                        </div>
                        <div>
                            <p className='text-gray-500'>{recipe.cookingTime + recipe.preparationTime} mins</p>
                        </div>
                    </div>
                    <div>
                        <button type='submit' onClick={() => navigate(`/recipe/${recipe._id}`)} className='bg-black px-4 py-2 text-white rounded-full cursor-pointer'>See recipe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
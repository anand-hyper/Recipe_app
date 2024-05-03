import React from 'react'
import { MdPeopleAlt, MdAccessTimeFilled } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { AiFillHeart,AiFillStar } from 'react-icons/ai';

const Favrecipes = ({ recipe }) => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className='sm:w-[320px] w-[280px] h-[480px] border border-gray-100 px-2 py-2'>
                    <div>
                        <div className='relative'>
                            <img src={recipe.imageUrl1} alt={recipe.name} className="w-[380px] h-[240px] object-cover mb-8" />
                            <div className="absolute top-4 right-4" >
                                <button className='bg-white p-2 rounded-full' disabled>
                                    <AiFillHeart fontSize={20} />
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
        </>
    )
}

export default Favrecipes
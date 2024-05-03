import axios from 'axios';
import React, { useState } from 'react'
import { getUserID } from '../hooks/GetUserId';
import bg from '../assets/foodbg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import Navbar from './Navbar';

const CreateRecipes = () => {
    const userID = getUserID();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({
        name: "",
        description: "",
        imageUrl1: "",
        imageUrl2: "",
        imageUrl3: "",
        imageUrl4: "",
        cookingTime: "",
        preparationTime: "",
        cuisines: "",
        calories: "",
        fats: "",
        carbs: "",
        proteins: "",
        rating: "",
        servings: "",
        ingredients: "",
        instructions: "",
        userOwner: userID
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    }
    console.log(recipe);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://recipeappserver.onrender.com/recipe", recipe);
            alert("Recipe created sucessfully");
            navigate("/");
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='w-full h-screen flex items-center sm:justify-between justify-center'>
            <div className='sm:fixed sm:flex hidden'>
                <div className='relative'>
                    <img src={bg} alt="sunshine" className='xl:w-[520px] lg:w-[340px] sm:w-[280px] h-screen object-cover' />
                </div>
                <div className='absolute top-5 left-5'>
                    <Link to='/'><BiArrowBack size={35} className="bg-white rounded-full p-2 hover:shadow-md duration-75" /></Link>
                </div>
            </div>
            <div></div>
            <div className='h-full mt-20 xl:pr-52 sm:pr-20 pr-0'>
                <div>
                    <div>
                        <p className='text-4xl font-extrabold mb-10'>Create Recipes</p>
                    </div>
                    <div>
                        <form className='flex flex-col item-center justify-center gap-3' onSubmit={handleSubmit}>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Recipe name</label>
                                <input type="text" name="name" placeholder='Enter the recipe name' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Description</label>
                                <input type="text" name="description" placeholder='Enter the description' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Recipes image 1</label>
                                <input type="text" name="imageUrl1" placeholder='Enter the Image url' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Recipes image 2</label>
                                <input type="text" name="imageUrl2" placeholder='Enter the Image url' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Recipes image 3</label>
                                <input type="text" name="imageUrl3" placeholder='Enter the Image url' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Recipes image 4</label>
                                <input type="text" name="imageUrl4" placeholder='Enter the Image url' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Cooking time</label>
                                <input type="number" name="cookingTime" placeholder='Enter the cooking time' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Preparation time</label>
                                <input type="number" name="preparationTime" placeholder='Enter the preparation time' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Cuisines</label>
                                <input type="text" name="cuisines" placeholder='Enter the cuisine' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px]'>Rating <span className='text-rose-500 text-[14px]'>( Out of 5 )</span></label>
                                <input type="text" name="rating" placeholder='Enter the rating' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md appearance-none" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Servings</label>
                                <input type="text" name="servings" placeholder='Enter the servings (no of persons)' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md appearance-none" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Calories</label>
                                <input type="text" name="calories" placeholder='Enter the calories' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md appearance-none" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Fat</label>
                                <input type="text" name="fats" placeholder='Enter the fats' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md appearance-none" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>carbohydrates</label>
                                <input type="text" name="carbs" placeholder='Enter the carbohydrates' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md appearance-none" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium'>Protein</label>
                                <input type="text" name="proteins" placeholder='Enter the proteins' onChange={handleChange} className="xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md appearance-none" required />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px]'>Ingredients <span className='text-rose-500 text-[14px]'>( Use comma's to split the ingredients )</span></label>
                                {/* <input type="text" name="ingredients" placeholder='Enter the ingredients' onChange={handleChange} className="w-[620px] border border-gray-400 px-4 py-2 rounded-md" required /> */}
                                <textarea name="ingredients" cols="60" rows="8" placeholder='Enter the ingredients' onChange={handleChange} className='xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md' required></textarea>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <label className='font-medium xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px]'>Instructions <span className='text-rose-500 text-[14px]'>( Use comma's to split the instructions )</span></label>
                                {/* <input type="text" name="instructions" placeholder='Enter the instructions' onChange={handleChange} className="w-[620px] border border-gray-400 px-4 py-2 rounded-md" required /> */}
                                <textarea name="instructions" cols="60" rows="8" placeholder='Enter the instructions' onChange={handleChange} className='xl:w-[620px] lg:w-[520px] sm:w-[340px] w-[280px] border border-gray-400 px-4 py-2 rounded-md' required></textarea>
                            </div>
                            <div className='mb-10'>
                                <button type='submit' className='bg-black px-8 py-2 text-white rounded-full mt-5'>Add recipe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRecipes
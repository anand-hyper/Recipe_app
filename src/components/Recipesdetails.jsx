import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Rating } from '@mui/material'
// import { BiTimeFive } from 'react-icons/bi'
import { MdOutlineTimer, MdPeopleAlt, MdAccessTimeFilled, MdTimer } from 'react-icons/md'
import { AiFillStar, AiFillFire } from 'react-icons/ai'
import { GiMuscleUp, GiFat } from 'react-icons/gi'
import { CiWheat } from 'react-icons/ci'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { FaSmile } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import Loader from '../assets/loader.gif'

const Recipesdetails = () => {
  const { ids } = useParams();
  console.log(ids)
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState({
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
    userOwner: ""
  });
  useEffect(() => {
    const fetchrecipes = async () => {
      try {
        setLoading(true);
        const response = await axios.post("https://recipeappserver.onrender.com/recipe/ids", { recipeID: ids });
        const info = response.data.response;
        setRecipes(info);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchrecipes();
  }, [])
  console.log(recipes);
  let ingredient = recipes.ingredients.split(',');
  console.log(ingredient);
  let instruction = recipes.instructions.split(',');
  console.log(instruction);

  return (
    <>
      {loading ? (<div className='w-full h-screen flex items-center justify-center'><img src={Loader} alt="Loading" className='w-[150px]' /></div>) : (
        <div className='flex xl:flex-row flex-col justify-between'>
          <div className='w-[720px] xl:flex hidden'></div>
          <div className='xl:w-[720px] w-full xl:h-screen xl:fixed'>
            <div className='absolute top-5 left-5 z-50'>
              <Link to='/'><BiArrowBack size={35} className="bg-white rounded-full p-2 hover:shadow-md duration-75" /></Link>
            </div>
            <Swiper
              // navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide><img src={recipes.imageUrl1} alt={recipes.name} className="xl:w-[720px] w-full xl:h-screen h-[420px] object-cover" /></SwiperSlide>
              <SwiperSlide><img src={recipes.imageUrl2} alt={recipes.name} className="xl:w-[720px] w-full xl:h-screen h-[420px] object-cover" /></SwiperSlide>
              <SwiperSlide><img src={recipes.imageUrl3} alt={recipes.name} className="xl:w-[720px] w-full xl:h-screen h-[420px] object-cover" /></SwiperSlide>
              <SwiperSlide><img src={recipes.imageUrl4} alt={recipes.name} className="xl:w-[720px] w-full xl:h-screen h-[420px] object-cover" /></SwiperSlide>
            </Swiper>
          </div>
          <div className='xl:pl-20 xl:pr-5 lg:px-20 sm:px-10 px-5 mt-10'>
            <p className='font-bold lg:text-5xl sm:text-4xl text-3xl mb-3'>{recipes.name}</p>
            <p className='sm:text-lg text-base mb-10 font-medium text-[#333] xl:w-[650px]'>{recipes.description}</p>
            <div className='grid grid-cols-2 gap-6 mb-10'>
              <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                  {/* <MdTimer fontSize={20} /> */}
                  <p className='sm:text-lg text-base font-bold '>PREP TIME</p>
                </div>
                <div><p className='sm:text-lg text-base   text-[#333] font-medium'>{recipes.preparationTime} mins</p></div>
              </div>
              <div className=''>
                <div className='flex items-center gap-2'>
                  {/* <MdAccessTimeFilled fontSize={20} /> */}
                  <p className='sm:text-lg text-base font-bold '>COOK TIME</p>
                </div>
                <p className='sm:text-lg text-base   text-[#333] font-medium'>{recipes.cookingTime} mins</p>
              </div>
              <div className=''>
                <div className='flex items-center gap-2'>
                  {/* <MdPeopleAlt fontSize={20} /> */}
                  <p className='text-lg font-bold '>SERVING</p>
                </div>
                <p className='sm:text-lg text-base   text-[#333] font-medium'>{recipes.servings}</p>
              </div>
              <div className=''>
                <div className='flex items-center gap-2'>
                  {/* <FaSmile fontSize={20} /> */}
                  <p className='sm:text-lg text-base font-bold '>RATING</p>
                </div>
                <Rating size="medium" value={Number(recipes.rating)} readOnly />
              </div>
            </div>
            <div className='mb-10'>
              <p className='text-3xl font-bold mb-3'>Ingredients</p>
              <div className='xl:w-[650px] w-full'>
                {ingredient?.map((ing, i) =>
                (
                  <div item key={i}>
                    <p className='sm:text-lg text-base font-medium mb-2 flex items-center gap-2 text-[#333] '><div><VscDebugBreakpointLog /></div><div>{ing}</div></p>
                  </div>
                ))}
              </div>
            </div>
            <div className='mb-10'>
              <p className='text-3xl font-bold mb-3'>Instructions</p>
              <div className='xl:w-[650px] w-full'>
                {instruction?.map((ins, i) =>
                (
                  <div item key={i}>
                    <p className='sm:text-lg text-base font-medium mb-2 flex items-start gap-2 text-[#333] '><div><VscDebugBreakpointLog className='mt-2' /></div><div>{ins}</div></p>
                  </div>
                ))}
              </div>
            </div>
            <div className='mb-10'>
              <p className='text-3xl font-bold mb-3'>Nutrition facts</p>
              <div className='grid grid-cols-2 gap-6'>
                <div className=''>
                  <div className='flex item-center gap-2'>
                    <AiFillFire fontSize={20} />
                    <p className='sm:text-lg text-base font-bold '>CALORIES</p>
                  </div>
                  <p className='sm:text-lg text-base  font-medium text-[#333] '>{recipes.calories}</p>
                </div>
                <div className=''>
                  <div className='flex item-center gap-2'>
                    <GiFat fontSize={20} />
                    <p className='sm:text-lg text-base font-bold '>FAT</p>
                  </div>
                  <p className='sm:text-lg text-base  font-medium text-[#333] '>{recipes.fats}</p>
                </div>
                <div className=''>
                  <div className='flex item-center gap-2'>
                    <CiWheat fontSize={20} />
                    <p className='sm:text-lg text-base font-bold '>CARBS</p>
                  </div>
                  <p className='sm:text-lg text-base  font-medium text-[#333] '>{recipes.carbs}</p>
                </div>
                <div className=''>
                  <div className='flex item-center gap-2'>
                    <GiMuscleUp fontSize={20} />
                    <p className='sm:text-lg text-base font-bold '>PROTEIN</p>
                  </div>
                  <p className='sm:text-lg text-base  font-medium text-[#333] '>{recipes.proteins}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Recipesdetails
import React from 'react'
import Cards from './Cards';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Recipescard = (props) => {

    const recipes = props.recipes;
    const savedRecipe = props.savedRecipe;
    const loading = props.loading;
    return (
        <div className='w-full h-full flex items-center justify-center my-10'>
            {loading ? (
                <div className='grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-8 sm:gap-10 gap-4 px-2'>
                    <div className='flex flex-col items-start justify-center'>
                        <Skeleton width={220} height={240} />
                        <Skeleton width={220} height={12} />
                        <Skeleton width={200} height={12} />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <Skeleton width={220} height={240} />
                        <Skeleton width={220} height={12} />
                        <Skeleton width={200} height={12} />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <Skeleton width={220} height={240} />
                        <Skeleton width={220} height={12} />
                        <Skeleton width={200} height={12} />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <Skeleton width={220} height={240} />
                        <Skeleton width={220} height={12} />
                        <Skeleton width={200} height={12} />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <Skeleton width={220} height={240} />
                        <Skeleton width={220} height={12} />
                        <Skeleton width={200} height={12} />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <Skeleton width={220} height={240} />
                        <Skeleton width={220} height={12} />
                        <Skeleton width={200} height={12} />
                    </div>
                </div>
            ) : (
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 sm:gap-10 gap-4'>
                    {recipes?.map((recipe, i) => (
                        <div item key={i}>
                            <Cards recipe={recipe} savedRecipe={savedRecipe} />
                        </div>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default Recipescard
 
import React, { useState }                  from 'react'
import { GifGrid }                          from './Components/GifGrid';
import { AddCategory }                      from './Components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);        
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr /> 
            <ol>
                {
                    categories.map( (category) =>(

                        <GifGrid 
                        key = { category}
                        category = { category } 
                        />
                    ))
                }
            </ol>  
        </>
    )
}

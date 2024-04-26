import React, { useEffect, useState } from 'react'

const Images = () => {


    useEffect(()=>{Fetchdata()},[]);
    const[Image,setImage] =useState([]);
    setInterval(()=>{Fetchdata()}, 10000);

    const Fetchdata = async()=>{
        const data = await fetch("https://api.thecatapi.com/v1/images/search?limit=8");
        const json = await data.json();
        setImage(json);
    }
    const Loading =()=> <h1>Loading...</h1>;


  return Image.length===0 ? <Loading/> : (
    <div className='flex flex-wrap w-2/3 ml-80'>
        {
          Image.map((item)=><img className='w-60 h-60 rounded-xl m-2' src={item.url} alt='cat-images'/>)
        }
    </div>
  )
}

export default Images;
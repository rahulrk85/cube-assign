import React, { useEffect, useState } from 'react'

const Images = () => {
    useEffect(()=>{Fetchdata()},[]);
    const[Image,setImage] =useState([]);

    const Fetchdata = async()=>{
        const data = await fetch("https://api.thecatapi.com/v1/images/search?limit=8");
        const json = await data.json();
        setImage(json);
    }
    const Loading =()=> <h1>Loading...</h1>;
  return Image.length===0 ? <Loading/> : (
    <div>
        <img src={Image[0].url} alt='cat' />
    </div>
  )
}

export default Images;
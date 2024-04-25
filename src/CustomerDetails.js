import React from 'react'
import Images from './Images';

const CustomerDetails = () => {
  return (
    <div className='text-center w-3/4 fixed ml-[510px]'>
        <h1 className='text-3xl font-medium p-2 m-2'>Customer 01 deatils Here</h1>
        <p className='text-lg font-light p-2 m-2 px-72'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Images />
    </div>
  )
}

export default CustomerDetails;
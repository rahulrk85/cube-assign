import React, { useState } from 'react'
import Card from './Card';

const Customerlist = () => {
  const[num,setnum]=useState(1);
  return (
    <div className='w-1/4'>
        {/* here the list of customers are present */}
        <Card n={num}/>
        <Card n="02"/>
        <Card n="03"/>
        <Card n="04"/>
        <Card n="05"/>
        <Card n="06"/>
        <Card n="07"/>
        <Card n="08"/>
        <Card n="09"/>
        <Card n="10"/>
        <Card n="11"/>
        <Card n="12"/>
        <Card n="13"/>
        <Card n="14"/>
        <Card n="15"/>
        <Card n="16"/>
        <Card n="17"/>
        <Card n="18"/>
        <Card n="19"/>
        <Card n="20"/>
        <Card n="21"/>
        <Card n="22"/>
        <Card n="23"/>
        <Card n="24"/>
        <Card n="25"/>
        <Card n="26"/>
        <Card n="27"/>
        <Card n="28"/>
    </div>
  )
}

export default Customerlist;
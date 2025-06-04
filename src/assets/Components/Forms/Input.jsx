import React, { useContext } from 'react'
import ValueSelectBoxes from "./../Context/Context"

export default function Input({title}) {


    
  return (
    <ValueSelectBoxes >

        <input type="text" className='w-full text-xs sm:text-base focus:outline-0'  placeholder={`${title} جستوجوی نام شهر در`} />
    </ValueSelectBoxes>
  )
}

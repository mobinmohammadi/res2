import React from 'react'

export default function SectionHeader({title}) {
  return (
    <div className='max-w-64 overflow-hidden' >
        <span className='text-xs  sm:text-sm  tracking-wide  font-bold  seaction-header'>{title}</span>
    </div>
  )
}

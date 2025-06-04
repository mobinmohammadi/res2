import React from 'react'
import "./ProgressBar.css"
export default function ProgressBar({ value, icons ,count }) {
    return (
        <>
            <div className="flex gap-2 items-center">
                
                <i>{icons}</i>
                <progress value={`${value}`} max="100" style={{ width  : "100px" , "--value": `${value}`, "--max": 100 }}></progress>
                <span className='text-xs'>{count} نظر</span>
            </div>
        </>

    )
}

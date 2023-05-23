import React from 'react'

export default function Btn(props) {
    return (
        <>
            <div className={`w-fit  px-2 text-[12px] font-extrabold flex items-center font-bold ${props.color}  border rounded-lg  gap-2`}>
                <span>
                    {props.text}
                </span>
                <span class="material-symbols-outlined">
                    {props.icon}
                </span>
            </div>
        </>
    )
}

import React from 'react'

const Button = ({text,size}) => {
  return <button className={`${size} text-white rounded my-[10px] bg-[#DB4444] text-[18px]`}>{text}</button>
}

export default Button
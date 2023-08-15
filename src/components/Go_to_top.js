import React, { useEffect, useState } from 'react'
import { FaAngleUp } from "react-icons/fa";

const Go_to_top = () => {
  const [backToButton, setBackToButton] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if (window.scrollY > 100) {
          setBackToButton(true)
      } else {
        setBackToButton(false)
      }
    })
  },[])

  const scrollup = () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <div>
      { backToButton && (
        <button className='btn'  style={{
          position:"fixed",
          background:"#1f2833",
          bottom:"50px",
          right:"50px",
          height:"50px",
          width:"50px",
          fontSize: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={scrollup}
        >
        <FaAngleUp  color='#66FCf1' /></button>
      )
    }
    </div>
  )
}

export default Go_to_top
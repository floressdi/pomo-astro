import React, {useState } from "react";
import Themestyles from "./styles/Theme.module.css";
import {RiSunLine} from 'react-icons/ri'
import {IoMdMoon} from 'react-icons/io'


export default function Themetoggle() {

  const [clickedTheme, setClickedTheme] = useState(false)
  const handleClickedTheme = () =>{ 
    setClickedTheme(!clickedTheme)
    toggleTheme()
  }

  let icon ;

  const setDarkMode = () =>{
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark")

  }

  const setLightMode = ()=>{
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme" , "light")
  }  


  if(typeof window != 'undefined'){  

  const selectedTheme =localStorage.getItem("selectedTheme");
  if(selectedTheme === "dark"){
    setDarkMode();
    icon = <RiSunLine/>
  }else{
    icon=<IoMdMoon />
  }
  }

  const toggleTheme = (e) =>{
    if(clickedTheme){
       setLightMode()
    }else{
      setDarkMode()
    } 
  }


  return (
    <button className={Themestyles.btnTheme} onClick={handleClickedTheme}>
       
        <div className="flexbox p-1">
            {icon} 
            <p className="ml-1 ">Tema</p>
        </div>
    </button>
  );
}
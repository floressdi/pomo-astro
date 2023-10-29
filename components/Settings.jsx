import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {RxCross2} from "react-icons/rx"
import Image from "next/image";
import astroexplorer from "../public/img/3d-illustration-astronaut-flying-with-planet-balloon_258822-283.png"
import Settingstyle from "./styles/Settings.module.css";
import dynamic from 'next/dynamic'

export default function Settings(prop) {
  const { clicktool, pomodoroRef, updateTimeDefaultValue} = prop;

  const inputs =[
    {
      value: "Pomodor",
      ref : pomodoroRef,
      defaultValue : 25
    }
  ]

  const change = ()  => {
    //Hacemos uso de la funcion clicktool y le pasamos el nuevo valor
    clicktool(false);
  };
 
  // let negativo = -1

  // if(inputs.defaultValue < 0 ){
  //    inputs.defaultValue = inputs.defaultValue * negativo
  // }


  // const [time, setTime] = useState(inputs.defaultValue);
  // // change the value to one that can be
  // if (time <= 0) {
  //   setTime(1);
  // }
  // if (time > 60) {
  //   setTime(25);
  // }

  // Add and decrease of time concentraction
  // function add(){
  //   setTime(inputs.defaultValue + 1) ;
  // };
  // function decrease() {
  //   setTime(inputs.defaultValue - 1);
  // };

  const Themetoggles = dynamic(() => import('./Themetoggle'), { ssr: false })

  return (
    <div className={`${Settingstyle.settingscontainer} grid grid-rows-3 gap-24 `}>
      <div className="w-11/12 mx-auto flex items-center">
        <button
          className="w-10 h-10 flex  items-center text-3xl  p-2 btn-gray rounded-3xl md:w-16 md:h-16 md:rounded-full md:text-4xl"
          onClick={()=>{
            change();
            updateTimeDefaultValue();
          }}
        >
            <RxCross2/>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image width={150} src={astroexplorer} alt="atronauta"/>

        <div className="w-11/12 h-auto py-3">
          <div className="w-full h-auto flex justify-center">
            {/* <button className={Settingstyle.arrowCenter} onClick={decrease}>
              <IoIosArrowBack />
            </button> */}
            {inputs.map(({value, defaultValue, ref},index)=>{
                return(
                  <input 
                          key={index}
                          min="1"
                          max="60"
                          className="input txt-font text-center font-semibold text-2xl"
                          type="number" 
                          defaultValue={defaultValue} 
                          ref={ref}
                  />
                )
              })}
        
            {/* <button className={Settingstyle.arrowCenter} onClick={add}>
              <IoIosArrowForward />
            </button> */}

          </div>
          <div className="mx-auto w-9/12 text-center my-5 py-3 txt-font">
            <p>Elige tu tiempo de concentracion <br/> o cambia el tema.</p>
          </div>
        </div>
      <Themetoggles/>
      </div>
    </div>
  );
}

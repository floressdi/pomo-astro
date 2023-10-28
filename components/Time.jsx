import React from "react";
// import soundclic from '../public/sounds/clicksoundeffect.mp3'
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import {BsPauseFill} from "react-icons/bs"

export default function Time({
  getTickingTime,
  startTimer,
  stage,
  ticking,
  seconds,
  isTimeUp,
  reset,
}) {
  // const {timePomo, getTickingTime, seconds} = prop

  // const [timeMinutes, setTimeMinutes] = useState(25); //Iniciamos en minutos
  // const [timeseconds, setTimeSeconds] = useState(0);

  // const [playSound] = useSound();


  // Manejador de tiempo 
  const [isActive, setIsActive]= useState(false);

  const toggleClock = ()=>{
    // sound();
    // playSound();
    setIsActive(!isActive)
    startTimer()
  }

  // function sound() {
  //   soundclic.play();
  // }

  // const clockTicking = () =>{
  //   const minutes = getTickingTime();
  //   const setMinutes = updateMinute();
  //   if(minutes === 0 && seconds === 0){

  //   }else if(seconds === 0){
  //       setMinutes((minute) => minute - 1);
  //       setSeconds(59);
  //   }else{
  //     setSeconds((second) => second - 1)
  //   }
  // }

  // const updateMinute = () => {
	// 	const updateStage = {
	// 		0: setPomodo,
	// 	};
	// 	return updateStage[stage];
	// };
 

  // Cuenta Regresiva
  // var timer;
  // useEffect(()=>{
  //   if(isActive && timeMinutes > 0){
  //     timer = setInterval(() => {
  //       setTimeSeconds(timeseconds - 1);
  //       if(timeseconds === 0) {
  //         setTimeMinutes(timeMinutes - 1);
  //         setTimeSeconds(59);
  //       }
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }  
  // });

  return (
    <div >
      <p className="txt-font text-8xl font-bold text-center">
      {getTickingTime()}:{seconds.toString().padStart(2,"0")}
        {/* {timePomo < 10 ? "0" + timePomo : timePomo}:
        {timeseconds < 10 ? "0" + timeseconds : timeseconds} */}
{/* 
        {timeMinutes < 10 ? "0" + timeMinutes : timeMinutes}:
        {timeseconds < 10 ? "0" + timeseconds : timeseconds} */}

      </p>
      <p className="txt-font text-center md:text-2xl"> {isActive ? "Explorador en viaje... " :"Esperando confirmacion para viajar" }</p>
      <button
        className="btn-black flexbox w-24 h-24 rounded-3xl text-3xl mt-14 mx-auto md:w-32 md:h-32"
        onClick={toggleClock}
      >
        {isActive ? <BsPauseFill/> : <FaPlay/>}
      </button>
    </div>
  );
}

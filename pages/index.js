import { Inter, Yeseva_One } from "next/font/google";
import { BsNut } from "react-icons/bs";
import Image from "next/image";
import Settings from "@/components/Settings";
import { useEffect, useRef, useState } from "react";
import nave from "../public/img/psd_3d_render_rocket_ioslated_on_background.png";
import Time from "@/components/Time";
import Goal from "@/components/Goal";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  // const [click, setclick]=useState;
  const [showGoal, setGoal] = useState(false)
  const [showSettings, setSettings] = useState(false);
  const [timePomo, setTimePomo] = useState(25)  
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(0);
  const [consumedSecond, setConsumedSecond] = useState(0);
  const [ticking, setTicking] = useState(false);
  // const [tiempofinal, settiempofinal] = useState(false)

  // const clicktool = (showSettings, time) => {
  //   //Recibimos como parametro a showSettings
  //   setSettings(showSettings); //Acutalizamos el valor
  //   setTimePomo(timePomo)//Actualizamos el valor
  // };

  const pomodoroRef = useRef();

  const updateTimeDefaultValue = () =>{
    setTimePomo(pomodoroRef.current.value);
  };

  const getTickingTime = () =>{
    const timeStage = {
      0: timePomo,
    }
    return timeStage[stage];
  }

  const updateMinute = () =>{
    const updateStage = {
      0: setTimePomo,
    }
    return updateStage[stage];
  }

  const reset = () =>{
    setConsumedSecond(0)
    setTimePomo(25)
    setSeconds(0)
  }

  const timeUp = () =>{
      reset();
      setIsTimeUp(true);
  }

  const setMinutes = updateMinute();
  const minutes = getTickingTime();
   if(minutes < 0){
    setMinutes(minutes * -1)
  }

  const clockTicking = () =>{
    if(minutes === 0 && seconds === 0){
      clicktgoal(!showGoal)
      timeUp();
    }else if(seconds === 0){
      setMinutes((minute) => minute -1);
      setSeconds(59)
    }else{
      setSeconds((second)=>second - 1);
    }
  };

  const startTimer = ()=>{
    setIsTimeUp(false);
    setTicking((ticking) => !ticking);
  }

  useEffect(()=>{
    // window.onbeforeunload =() =>{
    //   return consumedSecond ?" show warning": null;
    // };
    const timer = setInterval(()=>{
      if(ticking){
        setConsumedSecond((value)=>value +1)
        clockTicking();
      }
    }, 1000);
    if(isTimeUp){
      clearInterval(timer);
    }
    return()=>{
      clearInterval(timer)
    }
  },[ticking, seconds])

  const clicktool = (showSettings) =>{
    setSettings(showSettings);
  }

  const clicktgoal = (showGoal) =>{
    setGoal(showGoal);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center main ${inter.className}`}
    >
      <section className='sectionmain'>
        <div className="w-10/12 h-10 my-7">
          <button
            className="w-14 h-14 btn-gray flexbox text-2xl rounded-2xl md:w-20 md:h-20 md:text-3xl"
            onClick={clicktool}
          >
            <BsNut />
          </button>
        </div>
        <div className="w-full flex flex-col items-center">
          <Image src={nave} width={200}/>
          <Time 
            getTickingTime={getTickingTime}
            stage = {stage} 
            ticking = {ticking}
            startTimer = {startTimer}
            seconds = {seconds}
            isTimeUp  = {isTimeUp}
            reset = {reset}
            />
        </div>
      </section>
      <section className={`section__settings ${showSettings ? "shows":""} `}>
          <Settings 
              pomodoroRef = {pomodoroRef}
              updateTimeDefaultValue = {updateTimeDefaultValue}
              clicktool={clicktool}
          />
      </section>
      <section className={`section__goal ${showGoal ? "showss": ""}`}>
        <Goal
          // clicktgoal = {clicktgoal}
        />
      </section>
    </main>
  );
}

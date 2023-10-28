import React from 'react'
import Image from "next/image";
import {IoIosRefresh} from "react-icons/io"
import astrogoal from '../public/img/vecteezy_space-watercolor-hand-painted_13181197_93.png'
// import Confetti from './Confetti';
// import dynamic from 'next/dynamic';
// import Soundclic from "../public/sounds/clicksoundeffect.mp3";

export default function Goal() {

//  const DynamicConfetti = dynamic(
//     () => import('./Confetti'),
//     {ssr: false,}
//  );

 const hidden = ()=>{
    window.location.reload(true);
 }
  return (
    <section className='w-full h-5/6 flex flex-col items-center justify-center  '>
        {/* <div className='w-full h-screen z-10 fixed'>
            <Confetti/>
        </div> */}
        <div>
            <div className='container__imgGoal mx-auto'>
                <Image width={120} src={astrogoal} alt='atronauta con bandera'/>
            </div>
            <p className='text-center txt-font font-normal text-base my-10 md:text-xl'>
                <span className='text-3xl md:text-4xl font-bold'>
                    Wow! <br/> Lo lograste.
                </span>
                <br/>
                Felicidades, <br></br> llegaste a tu destino.
            </p>
        </div>
        <button className='w-20 h-20 flex items-center justify-center text-4xl btn-gray p-1 rounded-2xl md:w-36 md:h-36 md:text-6xl' onClick={hidden}>
            <IoIosRefresh/>
        </button>
    </section>
  )
}

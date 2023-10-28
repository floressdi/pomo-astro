import React, { useEffect, useState } from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import ReactConfetti from 'react-confetti';

export default function Confetti() {
    
    // const {width, height} = useWindowSize()
    // if(typeof window == "undefined"){
    //     return {with:1200, height:800};
    // }
    
    // const [windowDimension, setDimension] = useState({
    //     width: window.innerWidth, 
    //     height: window.innerHeight
    // })

    // const showAnimation = () =>{
    //     setDimension({
    //         width: window.innerWidth,
    //         height: height.innerHeight,
    //     });
    // }

    // useEffect(()=>{
    //     window.addEventListener('resize', showAnimation)
    //     return  () =>{
    //         window.removeEventListener('resize', showAnimation)
    //     }
    // }, [windowDimension])

    // const isSSR = typeof window == "undefined";
    // const [windowSize, setWindowSize] = React.useState({
    //   width: isSSR ? 1200 : window.innerWidth,
    //   height: isSSR ? 800 : window.innerHeight,
    // });
  
    // function changeWindowSize() {
    //   setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    // }
  
    // React.useEffect(() => {
    //   window.addEventListener("resize", changeWindowSize);
  
    //   return () => {
    //     window.removeEventListener("resize", changeWindowSize);
    //   };
    // }, []);
  
  return (
    <>
        <ReactConfetti
            // className='w-auto h-auto'
            // width={aut}
            // height={windowSize}
        />
    </>
  )
}
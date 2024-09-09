import { useEffect, useRef, useState } from "react";




const Timer = () => {
  const [sec , setSec ] = useState(0)
  const timer = useRef()

  function start(){
  timer.current = setInterval( () => {
      setSec( sec => sec + 1)
  },1000)   
  }

  function Stop(){
    setSec(0)
  }

  useEffect(() => {
    if (sec <= 0) {
      clearInterval(timer.current);
    }
  }, [sec])
    

  return (
    <div>
      
        <div className="timebox" onMouseEnter={()=>{start()}} onMouseLeave={()=>{Stop()}}>
            <h1> Count : {sec} </h1>
        </div>        

    </div>
  )
}

export default Timer

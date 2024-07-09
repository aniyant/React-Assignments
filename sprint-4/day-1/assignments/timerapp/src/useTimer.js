import { useEffect, useState } from "react"

export const useTimer = (initialState) =>{
    const [timer,setTimer] = useState(initialState);
    const [isRunning,setIsRunning] = useState(false);

    useEffect(()=>{
        let interval;
        if(isRunning) {
            interval = setInterval(() => {
                setTimer((prevTime) => {
                    const newSeconds = prevTime.seconds + 1;
                    const newMinutes = prevTime.minutes + Math.floor(newSeconds/60);
                    const newHours = prevTime.hours + Math.floor(newMinutes/60);
                    return {
                      hours: newHours % 24 ,
                      minutes: newMinutes % 60,
                      seconds: newSeconds % 60
                    }
                  });
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        }
    })

    const startTimer = () => {
        setIsRunning(true);
    }

    const stopTimer = () => {
        setIsRunning(false);
    }
    const resetTimer = () => {
        setIsRunning(false);
        setTimer(initialState);
    }

    return [timer,isRunning,startTimer,stopTimer,resetTimer]
} 
import React, { useState, useEffect } from "react";
// import styles from './timer.module.css';

export default function Timer({missed, song}) {
    const [timeLeft, setTimeLeft] = useState(15);
    const [inter, setInter] = useState()

    useEffect(() => {
         const interval = setInterval(() => {
            setTimeLeft((prevState) => prevState - 1);
        }, 1000);
        setInter(interval)
    }, []);

    useEffect(() => {
        if(timeLeft === 0) {
            clearInterval(inter)
            missed(song)
        }
    },[timeLeft])

    return <div>{timeLeft}</div>;
}
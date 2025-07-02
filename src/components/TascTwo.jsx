import React, { useState, useEffect, useRef } from 'react';



const TascTwo = () => {
    const [time, setTime] = useState(0);
    const [CheckStart, setCheckStart] = useState(false);
    const intervalIid = useRef(null);

    useEffect(() => {
        OnStart()

        return () => {
            clearInterval(intervalIid.current);
        }

    }, [])

    const removeInterval = () => {
        clearInterval(intervalIid.current);
        intervalIid.current = null;
        setCheckStart(false)
    }


    const onPause = () => {
        removeInterval()

    }

    const onReset = () => {
        removeInterval();
        setTime(0)
    }

    const OnStart = () => {
        intervalIid.current = setInterval(() => setTime((time) => time + 1), 1000);
        setCheckStart(true)
    }

    return (
        <>
            <h3>{time}</h3>
            {CheckStart
                ? <button onClick={onPause}>Пауза</button>
                : <button onClick={onReset}>стереть</button>}
            <button onClick={OnStart}>возобновить</button>
        </>
    )

}

export default TascTwo


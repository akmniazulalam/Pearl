import React from 'react'
import CountUp from 'react-countup';
const CounterHeading = ({className, endNumber, duration, startNumber}) => {
    return (
        <h1 className={`${className}`}>
            <CountUp start={startNumber} end={endNumber} duration={duration} />
        </h1>
    )
}

export default CounterHeading
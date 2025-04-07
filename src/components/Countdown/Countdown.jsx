import { useMemo, useState, useEffect, useCallback } from "react";

import "./Countdown.scss"


const Countdown = () => {
    const targetDate = useMemo(() => {
        return new Date("2025-05-29T09:00:00+08:00");
    }, []);

    const updateTimeLeft = useCallback(() => {
        const now = new Date();
        const difference = targetDate - now;
        return {
            days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
            hours: Math.max(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0),
            minutes: Math.max(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), 0),
        };
    }, [targetDate]);
    
    const [timeLeft, setTimeLeft] = useState(updateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(updateTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, [updateTimeLeft]);

    return (
        <div>
            <div className="countdown-background">
                <div className="countdown-container">
                    <div className="countdown-label" >starts in</div>
                    <div className="countdown" data-text="00 : 00 : 00">
                        <CountdownSegment value={timeLeft.days} label={"days"} />
                        <CountdownSegmentDivider />
                        <CountdownSegment value={timeLeft.hours} label={"hours"} />
                        <CountdownSegmentDivider />
                        <CountdownSegment value={timeLeft.minutes} label={"mins"} />
                    </div>
                </div>
            </div>
            <div className="countdown-fade"></div>
        </div>
    );
}

const CountdownSegment = (props) => {
    return (
        <div className="countdown-segment">
            <h1 className="countdown-segment-value">{`${props.value}`.padStart(2, "0")}</h1>
            <h2 className="countdown-segment-label">{props.label}</h2>
        </div>
    );
}

const CountdownSegmentDivider = () => {
    return (
        <h1 className="countdown-segment-divider">:</h1>
    );
}

export default Countdown;
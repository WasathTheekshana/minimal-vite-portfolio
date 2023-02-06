import React from "react";
import timelineData from "../data/timelineData";
import TimelineItem from "./TimelineItem";
import TitleAll from "./Title";

function Timeline() {

    const style = {
        mainContainer: 'flex flex-col md:flex-row justify-center my-20',
        secContainer: 'w-full md:w-7/12',
    }

    return (
        <div>
            <div className={style.mainContainer}>
                <div className={style.secContainer}>
                    <TitleAll>Timeline</TitleAll>
                    {timelineData.map(experiece => (
                        <TimelineItem
                            title={experiece.title}
                            year={experiece.year}
                            duration={experiece.duration}
                            details={experiece.details}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Timeline
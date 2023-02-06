import React from "react";

function Intro() {

    const style = {
        mainContainer: 'flex items-center justify-center flex-col text-center pt-20 pb-6',
        heading: 'text-4xl md:text-7xl mb-1 mb:mb-3 font-bold',
        paragraphOne: 'text-base md:text-xl mb-3 font-medium',
        paragraphTwo: 'text-sm max-w-xl mb-6 font-bold'
    }

    return (
        <div className={style.mainContainer}>
            <h1 className={style.heading}>Wasath</h1>
            <p className={style.paragraphOne}>Software Engineer & Web Developer</p>
            <p className={style.paragraphTwo}>
                {/* Wasath is a highly motivated and dedicated professional who possesses a unique set of skills and experiences. He is skilled in software engineering and web development, which makes him an asset to any team working on a software project. Additionally, his background in UI/UX design showcases his ability to create intuitive and user-friendly interfaces. */}
                <br />
                His current studies in software engineering are a testament to his commitment to continuous learning and development in the field. This, combined with his interest in cutting-edge technologies such as cloud computing and edge computing, makes Wasath well-positioned to keep abreast of the latest advancements in the industry.
            </p>
        </div>
    )
}

export default Intro

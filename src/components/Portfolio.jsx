import React from "react";
import portfolioData from "../data/portfolioData";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {

    const style = {
        card: 'flex flex-col md:flex-row items-center justify-center',
        container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    }

    return (
        <div className={style.card}>
            <div className={style.container}>
                {portfolioData.map(project => (
                    <PortfolioItem 
                        title={project.title}
                        imgUrl={project.imgUrl}
                        stack={project.stack}
                        link={project.link}

                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio
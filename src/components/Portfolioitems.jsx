import React from "react";

function PortfolioItem(title, imgUrl, stack, link) {
    return (
        <img
            src={imgUrl}
            alt=""
            className="w-full" />
    )
}

export default PortfolioItem;
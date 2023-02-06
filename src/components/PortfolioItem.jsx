import React from 'react'

function PortfolioItem({ title, imgUrl, stack, link }) {

    const style = {
        card: 'border-2 rounded-md overflow-hidden border-stone-800',
        img: 'w-full h-36 md:h-48 object-cover cursor-pointer p-1',
        info: 'w-full p-4',
        title: 'font-semibold text-lg md:text-xl mb-2 md:mb-3',
        item: 'flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm',
        element: 'inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'
    }

    return (

        <div className={style.card}>
            <img
                src={imgUrl}
                alt="Porject Image"
                className={style.img} />

            <div className={style.info}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.item}>
                    {stack.map(item => (
                        <span className={style.element}>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem
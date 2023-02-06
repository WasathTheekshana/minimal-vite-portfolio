import React from 'react'

function TitleAll({ childern, id }) {

    const style = {
        heading: 'text-2xl font-bold uunderline underline-offset-8 decoration-4 mb-5 text-stone-900',
    }

    return (
        <div>
            <h1
                id={id && id}
                className={style.heading}
            >
                {childern}
            </h1>
        </div>
    )
}

export default TitleAll
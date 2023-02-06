import React from 'react'

function TimelineItem({ year, title, duration, details }) {

  const style = {
    oList: 'flex flex-col md:flex-row relative border-l border-stone-200',
    lItem: 'mb-10 ml-4',
    mainContainer: 'absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white',
    item: 'flex flex-wrap flex-row gap-4 items-center justify-start text-xs md:text-sm',
    year: 'inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md',
    heading: 'text-lg font-semibold text-stone-900 ',
    duration: 'my-1 text-sm font-normal leading-none text-stone-400 ',
    details: 'my-2 text-base font-normal text-stone-600',
  }

  return (
    <div>
      <ol className={style.oList}>

        <li className={style.lItem}>
          <div className={style.mainContainer} />
          <p className={style.item}>
            <span className={style.year}>
              {year}
            </span>
            <h3 className={style.heading}>
              {title}
            </h3>
            <div className={style.duration}>
              {duration}
            </div>
          </p>
          <p className={style.details}>
            {details}
          </p>
        </li>

      </ol>
    </div>
  )
}

export default TimelineItem
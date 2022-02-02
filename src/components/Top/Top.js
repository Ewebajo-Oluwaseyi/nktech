import React from 'react'
import Style from './Top.module.css';
import cardi from '../../assets/cardi.jpg';

function Top() {
    return (
      <div className={Style.Top}>
        <div></div>
        <div className={Style.TopRight}>
          <div className={Style.TopItem}>
            <p>TRIPS</p>
          </div>
          <div className={Style.TopItem}>
            <p>RECENTLY VIEWED</p>
          </div>
          <div className={Style.TopItem}>
            <p>BOOKINGS</p>
          </div>
          <img className={Style.profile} src={cardi} alt=""/>
        </div>
      </div>
    )
}

export default Top

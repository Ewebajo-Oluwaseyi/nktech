import React from 'react'
import Style from './Cost.module.css';

function Cost() {
    return (
        <div className={Style.Cost}>
          <hr width="100%" color="whiteSmoke"/>
          <div className={Style.paymentSection}>
            <div className={Style.subtotalDiv}>
              <p>
                Subtotal
              </p>
              <div className={Style.price}>
                <p>
                  <span>&#8358;</span>2,497.00
                </p>
              </div>
            </div>
            <div className={Style.subtotalDiv}>
              <p>
                Estimated TAX
              </p>
              <div className={Style.price}>
                <p>
                  <span>&#8358;</span>119.64
                </p>
              </div>
            </div>
            <div className={Style.subtotalDiv}>
              <div className={Style.promotion}>
                <p>
                  Promotion Code:
                </p>
                <span>Z4KXLM94</span>
              </div>
              <div className={Style.price}>
                <p>
                  <span>&#8358;</span>-60.00
                </p>
              </div>
            </div>
          </div>
          <hr width="100%" color="whiteSmoke"/>
          <div className={Style.completePayment}>
            <input type="submit" value="Complete Payment"/>
            <div className={Style.total}>
              <p>TOTAL:<span>&#8358;</span>2556.64</p>
            </div>
          </div>
        </div>
    )
}

export default Cost

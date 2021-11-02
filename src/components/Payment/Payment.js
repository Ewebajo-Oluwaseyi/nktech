import React from 'react'
import Style from './Payment.module.css';
import CardImg from '../../assets/credit-card.jpg';
import Visa from '../../assets/visa.jpg';
import Discover from '../../assets/discover.png';
import Paypal from '../../assets/paypal.png';

function Payment() {
    return (
        <div className={Style.Payment}>
            <hr width="100%" color="whiteSmoke"/>
            <div className={Style.paymentSection}>
              <div className={Style.cardInfo}>
                <p className={Style.cardTitle}>Payment Information</p>
                <p className={Style.cardSubtitle}>Choose your method of payment</p>
                <img className={Style.cardImg} src={CardImg} alt=""/>
              </div>
              <div className={Style.cardDetails}>
                <div className={Style.paymentType}>
                  <img className={Style.visa} src={Visa} alt=""/> 
                  <img className={Style.discover} src={Discover} alt=""/>                   
                  <div className={Style.paypalSelect}>
                    <input type="radio" placeholder="paypal" className={Style.paypalRadioSelect}/>
                    <img className={Style.paypal} src={Paypal} alt=""/> 
                  </div>
                </div>
                <div className={Style.cardInputDetails}>
                    <form action="/">
                        <div className={Style.firstInputField}>
                            <div className={Style.inputField}>
                                <label for="credit-card-no">Credit Card number</label>
                                <input id="credit-card-no" type="text" placeholder="4324 5433 9382 1030"/>
                            </div>
                            <div className={Style.inputField}>
                                <label for="expiration-date">Expiration date</label>
                                <input id="expiration-date" type="text" placeholder="03/24"/>
                            </div>
                        </div>
                        <div className={Style.secondInputField}>
                            <div className={Style.inputField}>
                                <label for="security-code">Security code</label>
                                <input id="security-code" type="text" placeholder="420"/>
                            </div>
                            <div className={Style.inputField}>
                                <label for="postal-code">Postal Code</label>
                                <input id="postal-code" type="text" placeholder="10119"/>
                            </div>
                        </div>
                        <div className={Style.useCard}>
                          <input type="radio" id="card-radio" checked="checked" placeholder="card"/>
                          <p>Use this cardfor next time purchase</p>
                        </div>

                        <input type="submit" placeholder="Add card" className={Style.addCard}/>
                    </form>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Payment

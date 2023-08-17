import './Promo.css';
import landingLogo from '../../images/landing-logo.png'

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
      <img className="promo__image" alt='A comfortable bed' src={landingLogo}/>
        <h1 className="promo__title">Учебный проект студента факультета<br/> Веб-разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button" type="button">Узнать больше</button>
      </div>
      
    </section>
  )
}

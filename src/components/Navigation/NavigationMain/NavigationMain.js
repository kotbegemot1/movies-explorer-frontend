import './NavigationMain.css'
import '../Navigation.css'

export default function NavigationMain() {
  return (
      <nav className="navigation">
        <ul className="navigation__items">
          <li className="navigation__item">
            <a className="navigation__link" href="/">Регистрация</a>
          </li>
          <li className="navigation__item">
            <button className="navigation__button" type="button"><a className="navigation__link" href="/">Войти</a></button>
          </li>
        </ul>
      </nav>
    )
}
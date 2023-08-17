import './Logo.css'
import logo from '../../images/logo.svg'
export default function Logo() {
  return (
      <img className='nav__logo' src={logo} alt='Изображение логотипа' />
    )
}
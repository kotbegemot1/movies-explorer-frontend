import './Header.css'
import NavigationMain from '../Navigation/NavigationMain/NavigationMain'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
      <Logo />
      <NavigationMain />
      </div>
    </header>
    )
}
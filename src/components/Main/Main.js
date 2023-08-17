import Header from "../Header/Header"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
        {/* <Tech />
        <AboutMe />
        <Portfolio /> */}
      </main>
      {/* <Footer /> */}
    </>
    )
}
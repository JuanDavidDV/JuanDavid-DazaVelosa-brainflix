import "./Header.scss";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg"
import search from "../../assets/icons/search.svg"

const Header = prop => {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__container__logo__link" href="../../index.html">
                    <img className="header__container__logo" src={brainFlixLogo} alt="brainFlix-logo"/>
                </a>
                <div className="header__container__search-bar">
                    <img className="header__container__search-bar--icon" src={search} />
                    <input className="header__container__search-bar--field" type="text" name="search" placeholder="Search"/>
                </div>
                
            </div>

        </header>
    );
};

export default Header;
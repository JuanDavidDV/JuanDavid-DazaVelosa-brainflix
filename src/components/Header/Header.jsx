import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg"

const Header = prop => {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__container__logo__link" href="../../index.html">
                    <img className="header__container__logo" src={brainFlixLogo} alt="brainFlix-logo"/>
                </a>
            </div>

        </header>
    );
};

export default Header;
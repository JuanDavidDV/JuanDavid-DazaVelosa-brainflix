import "./Header.scss";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__container__logo__link" href="../../index.html">
                    <img className="header__container__logo" src={brainFlixLogo} alt="brainFlix-logo"/>
                </a>
                <div className="header__container__box">
                    <div className="header__container__box__search-bar">
                        <img className="header__container__box__search-bar--icon" src={search} alt="search-icon"/>
                        <input className="header__container__box__search-bar--field" type="text" name="search" placeholder="Search"/>
                    </div>
                    <img className="header__container__box__avatar" src={avatar} alt="avatar"/>
                </div>
                <div className="header__container__button">
                    
                    <button className="header__container__button__upload--button">
                        <img className="header__container__button__upload--icon" src={upload} alt="upload-icon"/>
                        UPLOAD
                    </button>
                </div>
                
                
            </div>

        </header>
    );
};

export default Header;
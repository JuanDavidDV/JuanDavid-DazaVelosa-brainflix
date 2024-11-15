import "./Header.scss";
import { Link } from 'react-router-dom';
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__container__logo__link">
                    <img className="header__container__logo" src={brainFlixLogo} alt="brainFlix-logo"/>
                </Link>
                <div className="header__container__wrapper">
                    <div className="header__container__wrapper__box">
                        <div className="header__container__wrapper__box__search-bar">
                            <img className="header__container__wrapper__box__search-bar--icon" src={search} alt="search-icon"/>
                            <input className="header__container__wrapper__box__search-bar--field" type="text" name="search" placeholder="Search"/>
                        </div>
                        <img className="header__container__wrapper__box__avatar" src={avatar} alt="avatar"/>
                    </div>
                    <div className="header__container__wrapper__button"> 
                        <Link to="/upload" className="header__container__wrapper__button--link"> 
                            <button className="header__container__wrapper__button__upload--button">
                                <img className="header__container__wrapper__button__upload--icon" src={upload} alt="upload-icon"/>
                                UPLOAD
                            </button>
                        </Link>
                        <img className="header__container__wrapper__box__avatar--tablet" src={avatar} alt="avatar"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
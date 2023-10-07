import "./Header.css";
import { useLocation, NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.svg";
import Sidebar from "../Sidebar/Sidebar";

function Header({ loggedIn, isVisible }) {
  const location = useLocation();
  const navigate = useNavigate();
  const landingPage = location.pathname === "/";
  const headerClassName = `header ${landingPage ? "header_dark" : ""}`;

  const accountButtonClassName = `header__account-button app__button ${landingPage ? "header__account-button_green" : ""
    }`;

  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  function openSidebar() {
    setIsSidebarOpened(true);
  }

  function closeSidebar() {
    setIsSidebarOpened(false);
  }
  function handleProfileButtonClick() {
    navigate("/profile", { replace: true })
  }
  function handleLoginButtonClick() {
    navigate("/signin", { replace: true })
  }

  if (!isVisible) {
    return null;
  }

  return (
    <header className={headerClassName}>
      <div className="header__container">
        <Link to="/" className="header__link app__link">
          <img src={logo} alt="логотип" className="header__logo" />
        </Link>
        {loggedIn ? (
          <>
            <ul className="header__nav">
              <nav className="header__nav-link">
                <NavLink
                  className={({ isActive }) =>
                    `app__link header__link ${landingPage ? "" : "header__link_black"
                    } ${isActive && "header__link_active"}`
                  }
                  to="/movies"
                >
                  Фильмы
                </NavLink>
              </nav>
              <nav className="header__nav-link">
                <NavLink
                  className={({ isActive }) =>
                    `app__link header__link ${landingPage ? "" : "header__link_black"
                    } ${isActive && "header__link_active"}`
                  }
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </NavLink>
              </nav>
            </ul>
            <button
              type="button"
              className={accountButtonClassName}
              onClick={handleProfileButtonClick}
            >
              Аккаунт
            </button>
            <button
              className={`header__burger-menu app__button ${landingPage ? "header__burger-menu_white" : ""
                }`}
              type="button"
              onClick={openSidebar}
            />
            <Sidebar isOpened={isSidebarOpened} onCloseSidebar={closeSidebar} />
          </>
        ) : (
          <ul className="header__buttons">
            <nav>
              <NavLink to="/signup" className="header__link app__link">
                Регистрация
              </NavLink>
            </nav>
            <nav>
              <button className="header__button app__button" type="button" onClick={handleLoginButtonClick}>Войти</button>
            </nav>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;

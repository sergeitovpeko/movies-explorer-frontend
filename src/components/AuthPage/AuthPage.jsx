import "./AuthPage.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthForm({
  name,
  onSubmit,
  greetingText,
  children,
  buttonText,
  text,
  page,
  linkText,
  isDisabled,
}) {

  const location = useLocation();
  const submitButtonClassName = `auth-page__submit app__button ${isDisabled ? "auth-page__submit_disabled" : ""
    } ${location.pathname === '/signup' ? "auth-page__submit_type_register" : "auth-page__submit_type_login"}`

  return (
    <section className="auth-page">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth-page__logo" />
      </Link>
      <h1 className="auth-page__greeting">{greetingText}</h1>
      <form className="auth-page__form" name={`${name}`} onSubmit={onSubmit}>
        {children}
      </form>
      <button
        type="submit"
        className={submitButtonClassName}
        disabled={isDisabled ? true : false}
      >{`${buttonText}`}</button>
      <p className="auth-page__paragraph">
        {text}
        <Link className="auth-page__link app__link" to={page}>
          {linkText}
        </Link>
      </p>
    </section>
  );
}

export default AuthForm;

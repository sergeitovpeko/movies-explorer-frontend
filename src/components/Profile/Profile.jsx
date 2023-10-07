import "./Profile.css";
import { useState } from "react";

function Profile({ onSubmit, onExit }) {
  const [isSubmitVisible, setIsSubmitVisible] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const submitClassName = `profile__submit app__button ${isSubmitDisabled && "profile__submit_disabled"
    }`;

  const handleChange = () => {
    setIsSubmitDisabled(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    setIsSubmitDisabled(true);
  };

  function enableEditing() {
    setIsSubmitVisible(true);
  }

  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">Привет, Сергей</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="profile__label">
            Имя
            <input
              type="text"
              placeholder="Сергей"
              className="profile__input"
              name="name"
              id="name"
              disabled={isSubmitVisible ? false : true}
              required
              onChange={handleChange}
              value="Сергей"
              minLength="2"
              maxLength="30"
            />
          </label>
          <label htmlFor="email" className="profile__label">
            E-mail
            <input
              type="text"
              placeholder="test@test.ru"
              className="profile__input"
              name="email"
              id="email"
              disabled={isSubmitVisible ? false : true}
              required
              onChange={handleChange}
              value="test@test.ru"
            />
          </label>
        </form>
        {isSubmitVisible ? (
          <button
            type="submit"
            className={submitClassName}
            disabled={isSubmitDisabled ? true : false}
          >
            Сохранить
          </button>
        ) : (
          <ul className="profile__links">
            <li>
              <button
                type="button"
                className="profile__link app__link"
                onClick={enableEditing}
              >
                Редактировать
              </button>
            </li>
            <li>
              <button
                type="button"
                className="profile__link profile__link_red app__link"
                onClick={onExit}
              >
                Выйти из аккаунта
              </button>
            </li>
          </ul>
        )}
      </section>
    </main>
  );
}

export default Profile;

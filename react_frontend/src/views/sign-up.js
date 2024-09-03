import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>SignUp - RelAlgoPractice</title>
        <meta property="og:title" content="SignUp - RelAlgoPractice" />
      </Helmet>
      <div className="sign-up-max-width thq-section-max-width">
        <div className="sign-up-form-root thq-section-padding">
          <div className="sign-up-form white-section-container">
            <div className="sign-up-title-root">
              <h2 className="headers1">Создайте аккаунт</h2>
            </div>
            <form className="sign-up-form1">
              <div className="sign-up-lastname">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="sign-up-text01 thq-body-large"
                >
                  Фамилия
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-lastname"
                  required="true"
                  placeholder="Ваша фамилия"
                  className="sign-up-textinput thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-firstname">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="sign-up-text02 thq-body-large"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-firstname"
                  required="true"
                  placeholder="Ваше имя"
                  className="sign-up-textinput1 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-middlename">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="sign-up-text03 thq-body-large"
                >
                  Отчество
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-middlename"
                  required="false"
                  placeholder="Username"
                  className="sign-up-textinput2 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-role">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="sign-up-text04 thq-body-large"
                >
                  Роль
                </label>
                <select className="sign-up-select thq-input">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <div className="sign-up-email">
                <label
                  htmlFor="thq-sign-up-1-email"
                  className="sign-up-text05 thq-body-large"
                >
                  Почта
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  placeholder="Ваша почта"
                  className="sign-up-textinput3 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-password">
                <div className="sign-up-textfield">
                  <label
                    htmlFor="thq-sign-up-1-password"
                    className="sign-up-text06 thq-body-large"
                  >
                    Пароль
                  </label>
                  <input
                    type="password"
                    id="thq-sign-up-1-password"
                    required="true"
                    placeholder="Пароль"
                    className="sign-up-textinput4 thq-body-large thq-input"
                  />
                </div>
              </div>
            </form>
            <div className="sign-up-container1">
              <input
                type="checkbox"
                id="thq-sign-up-1-newsletter"
                checked="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="thq-sign-up-1-newsletter"
                className="sign-up-text07 thq-body-large"
              >
                Получать рекламную рассылку себе на почту
              </label>
            </div>
            <div className="sign-up-terms-agree">
              <p className="thq-body-large">
                <span>
                  Продолжая, вы соглашаетесь с Условиями использования и
                  Политикой конфиденциальности
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <button type="submit" className="thq-button-filled sign-up-button">
              <span className="sign-up-text11 thq-body-small">
                Зарегистрироваться
              </span>
            </button>
            <div className="sign-up-have-an-account-login">
              <div className="sign-up-have-an-account-login1">
                <span className="sign-up-text12">Уже есть аккаунт?</span>
                <p className="thq-body-large">
                  <span>
                    <span>
                      Уже есть аккаунт?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="sign-up-text17">Войти</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

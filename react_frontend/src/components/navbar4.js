import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className={`navbar4-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <svg viewBox="0 0 877.7142857142857 1024" className="navbar4-icon">
          <path
            d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"
            className=""
          ></path>
        </svg>
        <span className="navbar4-text">{props.logoName}</span>
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links">
            <Link to="/" className="navbar4-link1 thq-body-small thq-link">
              {props.link1} 
            </Link>
            <Link
              to="/lessons"
              className="navbar4-link2 thq-body-small thq-link"
            >
              {props.link2}
            </Link>
            <Link
              to="/exercises"
              className="navbar4-link3 thq-body-small thq-link"
            >
              {props.link3}
            </Link>
            <Link to="/tests" className="navbar4-link4 thq-body-small thq-link">
              {props.link4}
            </Link>
            <Link to="/about" className="navbar4-link5 thq-body-small thq-link">
              {props.link5}
            </Link>
          </nav>
          <div className="navbar4-buttons">
            <button className="navbar4-action1 thq-button-filled thq-button-animated">
              <Link to="/sign-in" className="navbar4-navlink thq-body-small">
                Вход
              </Link>
            </button>
            <button className="navbar4-action2 thq-button-outline thq-button-animated">
              <Link to="/sign-up" className="navbar4-navlink1 thq-body-small">
                <span className="">Регистрация</span>
                <br className=""></br>
              </Link>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon2">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon4">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links1">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar4-buttons1">
            <button className="thq-button-filled">Вход</button>
            <button className="thq-button-outline">
              <span className="">
                <span className="">Регистрация</span>
                <br className=""></br>
              </span>
            </button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  action1: 'Регистрация',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'Лого для сайта',
  action2: 'Вход',
  link2: 'Уроки',
  link3: 'Упражнения',
  link1: 'Главная',
  rootClassName: '',
  link4: 'Тесты',
  logoName: 'RelAlgoPractice',
  link5: 'О нас',
}

Navbar4.propTypes = {
  action1: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  action2: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
  rootClassName: PropTypes.string,
  link4: PropTypes.string,
  logoName: PropTypes.string,
  link5: PropTypes.string,
}

export default Navbar4

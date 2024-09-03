import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <footer className="footer1-footer1 thq-section-padding">
      <div className="footer1-max-width thq-section-max-width">
        <div className="footer1-content">
          <div className="footer1-newsletter">
            <div className="footer1-container">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer1-icon"
              >
                <path d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"></path>
              </svg>
              <span className="footer1-text">{props.logoName}</span>
            </div>
            <div className="footer1-actions">
              <div className="footer1-form">
                <button className="thq-button-outline footer1-button">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
              </div>
              <span className="footer1-content2 thq-body-small">
                {props.content2}
              </span>
            </div>
          </div>
          <div className="footer1-links">
            <div className="footer1-column1">
              <strong className="thq-body-large footer1-column1-title">
                {props.column1Title}
              </strong>
              <div className="footer1-footer-links">
                <Link to="/" className="footer1-link1 thq-body-small">
                  {props.link1}
                </Link>
                <span className="thq-body-small">{props.link2}</span>
                <Link to="/exercises" className="footer1-link3 thq-body-small">
                  {props.link3}
                </Link>
                <Link to="/tests" className="footer1-link4 thq-body-small">
                  {props.link4}
                </Link>
              </div>
            </div>
            <div className="footer1-column2">
              <strong className="thq-body-large footer1-column2-title">
                {props.column2Title}
              </strong>
              <div className="footer1-footer-links1">
                <span className="thq-body-small">{props.link6}</span>
                <span className="thq-body-small">{props.link7}</span>
                <span className="thq-body-small">{props.link8}</span>
                <span className="thq-body-small">{props.link9}</span>
                <span className="thq-body-small">{props.link10}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer1-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer1-row">
            <span className="footer1-content3 thq-body-small">
              {props.content3}
            </span>
            <div className="footer1-footer-links2">
              <span className="footer1-link11 thq-body-small">
                {props.privacyLink}
              </span>
              <span className="footer1-link12 thq-body-small">
                {props.termsLink}
              </span>
              <span className="footer1-link13 thq-body-small">
                {props.cookiesLink}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer1.defaultProps = {
  link6: 'Контакты',
  termsLink: '/условия-использования',
  action1: 'Подписаться на рассылку',
  content3:
    'Сайт создан для обучения и практики в области баз данных и реляционной алгебры.',
  privacyLink: '/политика-конфиденциальности',
  socialLinkTitleCategory: 'Наши социальные сети',
  link4: 'Тесты',
  link9: 'Файлы cookie',
  link2: 'Учебные материалы',
  link1: 'Главная',
  cookiesLink: '/файлы-cookie',
  logoName: 'RelAlgoPractice',
  column2Title: 'Полезные ссылки',
  logoAlt: 'Лого Базы данных в действии',
  content2: '© 2024 Базы данных в действии. Все права защищены.',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link7: 'Политика конфиденциальности',
  link8: 'Условия использования',
  column1Title: 'О нас',
  link5: 'Блог',
  link3: 'Упражнения',
  link10: 'Карта сайта',
}

Footer1.propTypes = {
  link6: PropTypes.string,
  termsLink: PropTypes.string,
  action1: PropTypes.string,
  content3: PropTypes.string,
  privacyLink: PropTypes.string,
  socialLinkTitleCategory: PropTypes.string,
  link4: PropTypes.string,
  link9: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
  cookiesLink: PropTypes.string,
  logoName: PropTypes.string,
  column2Title: PropTypes.string,
  logoAlt: PropTypes.string,
  content2: PropTypes.string,
  logoSrc: PropTypes.string,
  link7: PropTypes.string,
  link8: PropTypes.string,
  column1Title: PropTypes.string,
  link5: PropTypes.string,
  link3: PropTypes.string,
  link10: PropTypes.string,
}

export default Footer1

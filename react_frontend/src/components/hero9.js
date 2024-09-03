import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div
      className={`hero9-header30 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero9-container"></div>
      <div className="thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text main">{props.heading1}</h1>
          <p className="hero9-text1 regular_text">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline hero9-button1">
              <span className="hero9-text3 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  rootClassName: '',
  action1: 'Присоединиться сейчас',
  action2: 'Начать изучение',
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'Изучай теорию баз данных',
  image1Alt: 'Изображение для изучения баз данных',
  content1:
    'Создай свой собственный сайт для изучения и практики теории баз данных и реляционной алгебры.',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
}

Hero9.propTypes = {
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Hero9

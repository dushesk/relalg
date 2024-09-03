import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <h2 className="headers1">{props.sectionTitle}</h2>
          </div>
          <span className="features1-text1 regular_text">
            {props.sectionDescription}
          </span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="headers2">{props.feature1Title}</h3>
                <span className="features1-feature1-description regular_text">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="headers2">{props.feature2Title}</h3>
                <span className="features1-feature2-description regular_text">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="headers2">{props.feature3Title}</h3>
                <span className="features1-feature3-description regular_text">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1614068630200-44bc6a9a898e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY2NzYzOXw&ixlib=rb-4.0.3&q=80&h=300',
  feature3Description:
    'Общайтесь с другими студентами и экспертами для решения вопросов и обмена опытом',
  feature1Title: 'Интерактивные уроки',
  slogan: 'Изучайте и практикуйте с легкостью',
  feature1Description:
    'Погружайтесь в мир баз данных через интерактивные уроки и задачи',
  feature3ImageAlt: 'Иллюстрация форума поддержки',
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Description:
    'Оттачивайте навыки с помощью практических заданий и проектов',
  mainAction: 'Создать аккаунт бесплатно',
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Title: 'Практические задания',
  feature3Title: 'Форум поддержки',
  sectionDescription:
    'Узнайте о ключевых функциях нашего сайта для изучения и практики теории баз данных',
  feature2ImageAlt: 'Иллюстрация практических заданий',
  feature1ImageAlt: 'Иллюстрация интерактивных уроков',
  sectionTitle: 'Особенности',
  secondaryAction: 'Узнать больше',
}

Features1.propTypes = {
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  mainAction: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  secondaryAction: PropTypes.string,
}

export default Features1

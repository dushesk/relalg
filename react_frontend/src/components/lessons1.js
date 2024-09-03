import React from 'react'

import PropTypes from 'prop-types'

import './lessons1.css'

const Lessons1 = (props) => {
  return (
    <div className={`lessons1-container ${props.rootClassName} `}>
      <div className="lessons1-max-width white-section-container thq-section-max-width">
        <div className="thq-flex-row lessons1-section-title">
          <div className="lessons1-column thq-flex-column">
            <h2 className="headers1">{props.sectionTitle}</h2>
          </div>
        </div>
        <div className="lessons1-content"></div>
      </div>
    </div>
  )
}

Lessons1.defaultProps = {
  mainAction: 'Создать аккаунт бесплатно',
  feature3Description:
    'Общайтесь с другими студентами и экспертами для решения вопросов и обмена опытом',
  feature1ImageAlt: 'Иллюстрация интерактивных уроков',
  feature2ImageAlt: 'Иллюстрация практических заданий',
  feature3Title: 'Форум поддержки',
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Title: 'Практические задания',
  feature1Description:
    'Погружайтесь в мир баз данных через интерактивные уроки и задачи',
  secondaryAction: 'Узнать больше',
  sectionDescription: 'Уроки',
  feature3ImageAlt: 'Иллюстрация форума поддержки',
  feature2Description:
    'Оттачивайте навыки с помощью практических заданий и проектов',
  feature1Title: 'Интерактивные уроки',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1614068630200-44bc6a9a898e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY2NzYzOXw&ixlib=rb-4.0.3&q=80&h=300',
  rootClassName: '',
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  sectionTitle: 'Уроки',
}

Lessons1.propTypes = {
  mainAction: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
}

export default Lessons1

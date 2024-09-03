import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './exercise1.css'

const Exercise1 = (props) => {
  return (
    <div className={`exercise1-container ${props.rootClassName} `}>
      <div className="white-section-container thq-section-max-width">
        <div className="exercise1-taskinput">
          <div className="exercise1-taskholder">
            <h1 className="exercise1-text">{props.heading}</h1>
            <span className="exercise1-text1">{props.text}</span>
            <span className="exercise1-text2">{props.text3}</span>
          </div>
          <div className="exercise1-formulainput">
            <input
              type="text"
              placeholder={props.textinputPlaceholder}
              className="exercise1-textinput input"
            />
            <button
              type="button"
              className="exercise1-button button thq-button-filled"
            >
              {props.button}
            </button>
          </div>
        </div>
        <div className="exercise1-line"></div>
        <div className="exercise1-taskoutput">
          <span className="">{props.text2}</span>
        </div>
      </div>
      <div className="exercise1-container2 thq-section-max-width">
        <Link
          to="/exercise"
          className="exercise1-prev-button thq-button-outline button"
        >
          {props.button1}
        </Link>
        <Link
          to="/exercise"
          className="exercise1-next-button thq-button-outline button"
        >
          {props.button2}
        </Link>
      </div>
    </div>
  )
}

Exercise1.defaultProps = {
  textinputPlaceholder: 'Введите формулу',
  text3: 'Таблицы',
  text: 'Текст задачи',
  text2: 'Результат',
  button1: 'Назад',
  button: 'Выполнить',
  rootClassName: '',
  heading: 'Задача',
  button2: 'Далее',
}

Exercise1.propTypes = {
  textinputPlaceholder: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  button2: PropTypes.string,
}

export default Exercise1

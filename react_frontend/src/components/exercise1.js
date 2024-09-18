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
            <span className="exercise1-text1">{props.taskText}</span>
            <span className="exercise1-text2">{props.text3}</span>
          </div>
          <div className="exercise1-formulainput">
            <input
              type="text"
              placeholder="Введите формулу"
              className="exercise1-textinput input"
            />
            <button
              type="button"
              className="exercise1-button button thq-button-filled"
            >
              Выполнить
            </button>
          </div>
        </div>
        <div className="exercise1-line"></div>
        <div className="exercise1-taskoutput">
          <span className="">{props.result}</span>
        </div>
      </div>
      <div className="exercise1-container2 thq-section-max-width">
        <Link
          to="/exercise"
          className="exercise1-prev-button thq-button-outline button"
        >
          Назад
        </Link>
        <Link
          to="/exercise"
          className="exercise1-next-button thq-button-outline button"
        >
          Далее
        </Link>
      </div>
    </div>
  )
}

Exercise1.defaultProps = {
  text3: 'Таблицы',
  taskText: 'Текст задачи',
  result: 'Результат',
  rootClassName: '',
  heading: "Задача",
}

Exercise1.propTypes = {
  text3: PropTypes.string,
  taskText: PropTypes.string,
  result: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default Exercise1

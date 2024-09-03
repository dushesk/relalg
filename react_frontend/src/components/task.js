import React from 'react'

import PropTypes from 'prop-types'

import './task.css'

const Task = (props) => {
  return (
    <div className={`task-container ${props.rootClassName} `}>
      <div className="white-section-container thq-section-max-width">
        <div className="task-taskinput">
          <div className="task-container2">
            <h1 className="task-text">{props.heading}</h1>
            <span className="task-text1">{props.text}</span>
          </div>
          <span className="task-text2">{props.text3}</span>
        </div>
      </div>
    </div>
  )
}

Task.defaultProps = {
  text2: 'Результат',
  heading: 'Задача 1',
  text: 'Найти всех работников, у которых зарплата больше 6000',
  text3: 'Таблицы:',
  textinputPlaceholder: 'Введите формулу',
  button: 'Выполнить',
  rootClassName: '',
}

Task.propTypes = {
  text2: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Task

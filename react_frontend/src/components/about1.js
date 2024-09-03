import React from 'react'

import './about1.css'

const About1 = (props) => {
  return (
    <div className="about1-container thq-section-padding">
      <div className="about1-max-width thq-flex-column thq-section-max-width">
        <div className="about1-content thq-flex-column">
          <ul>
            <li className="about1-li list-item thq-flex-column">
              <h2 className="about1-heading1 headers1">
                Что такое RelAlgoPractice?
              </h2>
              <p>
                Если вы хотите понять основы баз данных, научиться понимать, как
                работают запросы к ним, то стоит начать с изучения реляционной
                алгебры. Данный проект - это инструмент для интерактивного
                изучения этой темы. Для большего погружения на сайте
                предоставлены учебные материалы и тесты для проверки знаний.
              </p>
              <ul className="about1-ul1 thq-flex-column">
                <li className="list-item">
                  <h3 className="headers2">Упражнения</h3>
                  <p className="about1-content2 regular_text">
                    Практические задания для закрепления знаний
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="headers2">Тесты</h3>
                  <p className="about1-content3 regular_text">
                    Проверьте свои знания с помощью тестовых заданий
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="headers2">Обратная связь</h3>
                  <p className="about1-content6 regular_text">
                    Возможность получить комментарий к своей работе от
                    преподавателя
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="about1-content1 regular_text about1-content1 thq-flex-column">
          <ul>
            <li className="about1-li04 list-item thq-flex-column">
              <h2 className="about1-heading7 headers1">
                Возможности калькулятора
              </h2>
              <p className="about1-content7 regular_text">
                Наш калькулятор поддерживает большинство операторов реляционной
                алгебры
              </p>
              <ul className="about1-ul3 thq-flex-column">
                <li className="list-item">
                  <p className="about1-content9 regular_text">проекция</p>
                </li>
                <li className="list-item">
                  <p className="about1-content10">
                    <span>переименование</span>
                    <br></br>
                  </p>
                </li>
                <li className="list-item">
                  <p className="about1-content11">объединение</p>
                </li>
                <li className="list-item">
                  <p className="about1-content111">соединение</p>
                </li>
                <li className="list-item">
                  <p className="about1-content12">
                    <span>вычитание</span>
                    <br></br>
                  </p>
                </li>
                <li className="list-item">
                  <p className="about1-content121">
                    <span>пересечение</span>
                    <br></br>
                  </p>
                </li>
                <li className="list-item">
                  <p className="about1-content122">
                    <span>выборка (ограничение)</span>
                    <br></br>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About1

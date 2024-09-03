import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './profile1.css'

const Profile1 = (props) => {
  return (
    <div className="profile1-container white-section-container thq-section-max-width">
      <div className="profile1-container1">
        <h1 className="profile1-text">Профиль</h1>
        <svg viewBox="0 0 877.7142857142857 1024" className="profile1-icon">
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM877.714 449.714v126.857c0 8.571-6.857 18.857-16 20.571l-105.714 16c-6.286 18.286-13.143 35.429-22.286 52 19.429 28 40 53.143 61.143 78.857 3.429 4 5.714 9.143 5.714 14.286s-1.714 9.143-5.143 13.143c-13.714 18.286-90.857 102.286-110.286 102.286-5.143 0-10.286-2.286-14.857-5.143l-78.857-61.714c-16.571 8.571-34.286 16-52 21.714-4 34.857-7.429 72-16.571 106.286-2.286 9.143-10.286 16-20.571 16h-126.857c-10.286 0-19.429-7.429-20.571-17.143l-16-105.143c-17.714-5.714-34.857-12.571-51.429-21.143l-80.571 61.143c-4 3.429-9.143 5.143-14.286 5.143s-10.286-2.286-14.286-6.286c-30.286-27.429-70.286-62.857-94.286-96-2.857-4-4-8.571-4-13.143 0-5.143 1.714-9.143 4.571-13.143 19.429-26.286 40.571-51.429 60-78.286-9.714-18.286-17.714-37.143-23.429-56.571l-104.571-15.429c-9.714-1.714-16.571-10.857-16.571-20.571v-126.857c0-8.571 6.857-18.857 15.429-20.571l106.286-16c5.714-18.286 13.143-35.429 22.286-52.571-19.429-27.429-40-53.143-61.143-78.857-3.429-4-5.714-8.571-5.714-13.714s2.286-9.143 5.143-13.143c13.714-18.857 90.857-102.286 110.286-102.286 5.143 0 10.286 2.286 14.857 5.714l78.857 61.143c16.571-8.571 34.286-16 52-21.714 4-34.857 7.429-72 16.571-106.286 2.286-9.143 10.286-16 20.571-16h126.857c10.286 0 19.429 7.429 20.571 17.143l16 105.143c17.714 5.714 34.857 12.571 51.429 21.143l81.143-61.143c3.429-3.429 8.571-5.143 13.714-5.143s10.286 2.286 14.286 5.714c30.286 28 70.286 63.429 94.286 97.143 2.857 3.429 4 8 4 12.571 0 5.143-1.714 9.143-4.571 13.143-19.429 26.286-40.571 51.429-60 78.286 9.714 18.286 17.714 37.143 23.429 56l104.571 16c9.714 1.714 16.571 10.857 16.571 20.571z"></path>
        </svg>
      </div>
      <div className="profile1-user-info">
        <div className="profile1-lastname">
          <span className="profile1-text01">
            <span>Фамилия</span>
            <br></br>
          </span>
          <span>{props.text5}</span>
        </div>
        <div className="profile1-firstname">
          <span className="profile1-text05">Имя</span>
          <span className="profile1-text06">{props.text4}</span>
        </div>
        <div className="profile1-middlename">
          <span className="profile1-text07">Отчество</span>
          <span className="profile1-text08">{props.text}</span>
        </div>
        <div className="profile1-mail">
          <span className="profile1-text09">Почта</span>
          <span className="profile1-text10">{props.text1}</span>
        </div>
        <div className="profile1-role">
          <span className="profile1-text11">Роль</span>
          <span className="profile1-text12">{props.text2}</span>
        </div>
      </div>
      <Link to="/" className="profile1-navlink button thq-button-filled">
        Выйти
      </Link>
    </div>
  )
}

Profile1.defaultProps = {
  text: 'Иванович',
  text1: 'email@mail.ru',
  text2: 'Студент',
  text4: 'Иван',
  text5: 'Иванов',
  button: 'Button',
  text3: 'Text',
}

Profile1.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  button: PropTypes.string,
  text3: PropTypes.string,
}

export default Profile1

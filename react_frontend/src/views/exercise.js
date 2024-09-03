import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Exercise1 from '../components/exercise1'
import Footer1 from '../components/footer1'
import './exercise.css'

const Exercise = (props) => {
  return (
    <div className="exercise-container">
      <Helmet>
        <title>Exercise - RelAlgoPractice</title>
        <meta property="og:title" content="Exercise - RelAlgoPractice" />
      </Helmet>
      <Navbar4
        action1="Регистрация"
        action2="Вход"
        logoAlt="Здесь вы найдете логотип для нашего сайта"
        rootClassName="navbar4-root-class-name9"
      ></Navbar4>
      <Exercise1
        rootClassName="exercise1-root-class-name1"
        heading="Задача 1"
        text="Найти всех работников, у которых зарплата больше 6000"
      ></Exercise1>
      <Footer1></Footer1>
    </div>
  )
}

export default Exercise

import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Lessons1 from '../components/lessons1'
import Footer1 from '../components/footer1'
import './lessons.css'

const Lessons = (props) => {
  return (
    <div className="lessons-container">
      <Helmet>
        <title>Lessons - RelAlgoPractice</title>
        <meta property="og:title" content="Lessons - RelAlgoPractice" />
      </Helmet>
      <Navbar4
        action1="Регистрация"
        action2="Вход"
        logoAlt="Здесь вы найдете логотип для нашего сайта"
        rootClassName="navbar4-root-class-name4"
      ></Navbar4>
      <Lessons1 rootClassName="lessons1-root-class-name"></Lessons1>
      <Footer1></Footer1>
    </div>
  )
}

export default Lessons

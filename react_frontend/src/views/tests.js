import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Footer1 from '../components/footer1'
import './tests.css'

const Tests = (props) => {
  return (
    <div className="tests-container">
      <Helmet>
        <title>Tests - RelAlgoPractice</title>
        <meta property="og:title" content="Tests - RelAlgoPractice" />
      </Helmet>
      <Navbar4
        action1="Регистрация"
        action2="Вход"
        logoAlt="Здесь вы найдете логотип для нашего сайта"
        rootClassName="navbar4-root-class-name7"
      ></Navbar4>
      <Footer1></Footer1>
    </div>
  )
}

export default Tests

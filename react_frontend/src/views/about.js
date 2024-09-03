import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import About1 from '../components/about1'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - RelAlgoPractice</title>
        <meta property="og:title" content="About - RelAlgoPractice" />
      </Helmet>
      <Navbar4
        action1="Регистрация"
        action2="Вход"
        rootClassName="navbar4-root-class-name8"
      ></Navbar4>
      <About1></About1>
      <Footer1></Footer1>
    </div>
  )
}

export default About

import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import Contact3 from '../components/contact3'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>RelAlgoPractice</title>
        <meta property="og:title" content="RelAlgoPractice" />
      </Helmet>
      <Navbar4
        action1="Регистрация"
        action2="Вход"
        logoAlt="Здесь вы найдете логотип для нашего сайта"
        rootClassName="navbar4-root-class-name"
      ></Navbar4>
      <Hero9
        content1="Интерактивный помощник по реляционной алгебре"
        heading1="Изучай реляционную алгебру"
        rootClassName="hero9-root-class-name"
      ></Hero9>
      <Features1
        mainAction="Создать аккаунт"
        feature3Title="Обратная связь"
        feature1ImageSrc="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxpbnRlcmFjdGl2ZXxlbnwwfHx8fDE3MTk2ODMwNTF8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
        feature3ImageSrc="https://images.unsplash.com/photo-1632144130358-6cfeed023e27?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxmZWVkYmFja3xlbnwwfHx8fDE3MTk2ODMxMjd8MA&amp;ixlib=rb-4.0.3&amp;h=300"
        feature3Description="Получайте комментарии к своей работе от преподавателя"
      ></Features1>
      <Contact3></Contact3>
      <Footer1></Footer1>
    </div>
  )
}

export default Home

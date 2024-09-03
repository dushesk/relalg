import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Profile1 from '../components/profile1'
import Footer1 from '../components/footer1'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - RelAlgoPractice</title>
        <meta property="og:title" content="Profile - RelAlgoPractice" />
      </Helmet>
      <Navbar4
        action1="Регистрация"
        action2="Вход"
        logoAlt="Здесь вы найдете логотип для нашего сайта"
        rootClassName="navbar4-root-class-name10"
      ></Navbar4>
      <Profile1></Profile1>
      <Footer1></Footer1>
    </div>
  )
}

export default Profile

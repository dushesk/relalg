import React from 'react'

import PropTypes from 'prop-types'

import './contact3.css'

const Contact3 = (props) => {
  return (
    <div className="contact3-contact20 thq-section-padding">
      <div className="contact3-max-width thq-section-max-width">
        <div className="contact3-section-title">
          <span className="contact3-text regular_text">{props.content2}</span>
          <div className="contact3-content">
            <h2 className="headers1">{props.heading1}</h2>
            <p className="contact3-text2 regular_text">{props.content1}</p>
          </div>
        </div>
        <div className="contact3-row">
          <div className="contact3-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact3-contact-info">
              <div className="contact3-content2">
                <h3 className="contact3-text3 headers2">Email</h3>
                <p className="contact3-text4 regular_text">{props.content3}</p>
              </div>
              <span className="contact3-email thq-body-small regular_text">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact3-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact3-contact-info1">
              <div className="contact3-content4">
                <h3 className="contact3-text5 headers2">Phone</h3>
                <p className="contact3-text6 regular_text">{props.content4}</p>
              </div>
              <span className="contact3-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
          <div className="contact3-content5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact3-contact-info2">
              <div className="contact3-content6">
                <h3 className="contact3-text7 headers2">Office</h3>
                <p className="contact3-text8 regular_text">{props.content5}</p>
              </div>
              <span className="contact3-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact3.defaultProps = {
  content4:
    'Будем рады услышать ваши отзывы и предложения по улучшению нашего сайта.',
  email1: 'info@yourwebsite.com',
  heading1: 'Свяжитесь с нами',
  address1: 'ул. Примерная, д. 123, г. Примерный, Россия',
  phone1: '+7 (123) 456-7890',
  content5:
    'Следите за обновлениями наших уроков и материалов, подписавшись на нашу рассылку.',
  content1:
    'Если у вас есть вопросы или предложения, не стесняйтесь обращаться к нам.',
  content2:
    'Мы всегда готовы помочь вам в изучении баз данных и реляционной алгебры.',
  content3:
    'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время.',
}

Contact3.propTypes = {
  content4: PropTypes.string,
  email1: PropTypes.string,
  heading1: PropTypes.string,
  address1: PropTypes.string,
  phone1: PropTypes.string,
  content5: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  content3: PropTypes.string,
}

export default Contact3

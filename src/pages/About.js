import React from 'react'
import AboutMe from './AboutMe'
import Biography from './Biography'
import SkilL from './Skill'
import Strengths from './Strengths'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const About = () => {
  return (
    <>
    <h2>About</h2>
      <div className="about_content common">
        <div className="about_image about-image">
          <img src="/images/big-photo0000-2780.jpg"></img>
        </div>
        <div className='back_box'></div>
        <div className="about_text about-text">
          <h3 className="name">
            吉嶺 勇斗<span>（ Yoshimine yuuto ）</span>
            </h3>
            <p className="long">
              2002年鹿児島県生まれ。 高校卒業後、電子部品工場に就職し5年間勤務。
              4年目にHTML・CSS・JavaScriptに出会い、
              Webデザイナーやプログラミングに興味を持つ。
              独学で学び続ける中でエンジニアという職業に魅了され、
              2025年に念願のIT業界への転職を実現。
              エンジニアとして新たなキャリアをスタートさせる。
            </p>
            <p className="short">
              <dl>
                <dt>名称</dt>
                <dd>key visual</dd>
                <dt>所在地</dt>
                <dd>鹿児島市内</dd>
                <dt>お問い合わせ</dt>
                <dd>jilingyongdou@gmail.com</dd>
                <dt>事業内容</dt>
                <dd>HTML・CSS・Javascriptによるコーディング<br/>wordpress・CMS導入<br/>HP ・LPのデザイン<br/></dd>
              </dl>
            </p>
        </div>
      </div>
    <Strengths/>
    <Contact/>
    </>
  )
}

export default About
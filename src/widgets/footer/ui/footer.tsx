import { FacebookIcon, InstaIcon, Logo, YahooIcon } from '@/shared/assets/icons'
import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-up">
                <div className="logo-foot" style={{color: '#fff'}}>
                    <Logo />
                    <p>MyCourse.io</p>
                </div>
                <div className="footer-up-block">
                    <p>Web Programming</p>
                    <p>Mobile Programming</p>
                    <p>Java Beginner</p>
                    <p>PHP Beginner</p>
                </div>
                <div className="footer-up-block">
                    <p>Adobe Illustrator</p>
                    <p>Adobe Photoshop</p>
                    <p>Design Logo</p>
                </div>
                <div className="footer-up-block">
                    <p>Writing Course</p>
                    <p>Photography</p>
                    <p>Video Making</p>
                </div>
            </div>
            <hr />
            <div className="footer-down">
                <p>Copyright © MyCourse.io 2024. All Rights Reserved</p>
                <div className="footer-down-social-icons">
                    <YahooIcon/>
                    <InstaIcon/>
                    <FacebookIcon/>
                </div>
            </div>
        </div>
    )
}

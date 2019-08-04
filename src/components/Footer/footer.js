import React, {Component} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './footer.css'

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="SocialMedia">
                    <div className="SocialMediaBlock">
                        <a href="https://www.facebook.com/omkarsb" target="_blank"><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                    </div>
                    <div className="SocialMediaBlock">
                        <a href="https://www.instagram.com/omkarsawantbhosle/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
                    </div>
                    <div className="SocialMediaBlock">
                        <a href="https://twitter.com/OmSawantBhosle" target="_blank"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import logo from '../imgs/logo.png'
import map from '../imgs/map.png'
import { Row, Col, Container } from 'reactstrap'

const Contact = () => {
    return (
        <div className='wrapper-div'>
            <div className="navigation">
                <div className='place-name box'>
                    <h5>Nalewki z Galicji </h5>
                </div>
                <div className="logo-div box">
                    <div>
                        <img src={logo} className="logo-about" alt='logo-img-nalivki' />
                    </div>
                </div>
                <div className="nav-items box">
                    <div>
                        <h5>Assortyment</h5>
                    </div>
                    <div>
                        <div className="white-line-nav">
                        </div>
                    </div>
                    <div>
                        <h5>Skombinój sam</h5>
                    </div>
                    <div>
                        <div className="white-line-nav">
                        </div>
                    </div>
                    <div>
                        <h5>Kontakt</h5>
                    </div>
                </div>
            </div>
            <div className="contact-info-div">
                <div className="contacts-div-header">
                    <h2>We want to be found!</h2>
                </div>
                <div className="contacts-div">
                    <div className="contacts">
                        <h4>- Kraków, Plac Nowy 3 </h4>
                    </div>
                    <div className="contacts">
                        <h4><a href="mailto:f.poganko@gmail.com">- f.poganko@gmail.com</a></h4>
                    </div>
                    <div className="contacts">
                        <h4>- +48 577 931 594</h4>
                    </div>
                </div>
            </div>
            <div className="map-div">
            </div>
        </div>
    )
}

export default Contact;
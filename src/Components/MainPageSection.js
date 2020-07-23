import React from 'react'
import logo from '../imgs/logo.png'
import bottle1 from '../imgs/bottle-front-2.png'
import bottle2 from '../imgs/bottle-main.png'
import { Row, Col, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MainPageSection = () => {
    return (
        <div className="wrapper-div">
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
            <div className="main-div-two-bottles-div">
                <Container>
                    <Row>
                        <Col col="12" md="6">
                            <div className="div-bottle-btn">
                                <div className="bottle-div">
                                    <img src={bottle1} className="bottle bottle-1" alt="bottle"></img>
                                </div>
                                <div className="button-div">
                                    <button className="button button-1">
                                        Assortyment
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col col="12" md="6">
                            <div className="div-bottle-btn">
                                <div className="bottle-div bottle-div-2">
                                    <img src={bottle2} className="bottle bottle-2" alt="bottle"></img>
                                </div>
                                <div className="button-div">
                                    <button className="button button-2">
                                        Skombinój sam
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>
            <div className="social-media-div">
                <div className="mail-icon">
                    <a href="lol">
                        <FontAwesomeIcon className="social-icon" icon={faEnvelope} />
                    </a>
                </div>
                <div className="instagram-icon">
                    <a href="lol">
                        <FontAwesomeIcon className="social-icon" icon={faFacebookSquare} />
                    </a>
                </div>
                <div className="facebook-icon">
                    <a href="lol">
                        <FontAwesomeIcon className="social-icon" icon={faInstagramSquare} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainPageSection
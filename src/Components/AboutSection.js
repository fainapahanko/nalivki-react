import React from 'react';
import logo from '../imgs/logo.png'
import { Row, Col, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const AboutSection = () => {
    return (
        <div className="wrapper-div-about">
            <div className="navigation navigation-black-shadow">
                <div className='place-name box'>
                    <h5>Nalewki z Galicji </h5>
                </div>
                <div className="logo-div box">
                    <div>
                        <img className='logo-about' src={logo} alt='logo-img-nalivki' />
                    </div>
                </div>
                <div className="nav-items box">
                    <div>
                        <h5>Assortyment</h5>
                    </div>
                    <div>
                        <div className="black-line-nav">
                        </div>
                    </div>
                    <div>
                        <h5>Skombinój sam</h5>
                    </div>
                    <div>
                        <div className="black-line-nav">
                        </div>
                    </div>
                    <div>
                        <h5>Kontakt</h5>
                    </div>
                </div>
            </div>
            <Container fluid>
                <Row className="mt-5">
                    <Col md="5" col="8" className="picture-div">
                        <div className="img img-about-bar"></div>
                    </Col>
                    <Col md="3" col="2"></Col>
                    <Col md="3" col="12"  className="about-nalivki-text">
                        <Row>
                            <Col md="12" col="4">
                                <div className="about-nalivki-header">
                                    <h2>Przyjdź <br/>  sprobój <br/> zakochaj się </h2>
                                </div>
                            </Col>
                            <Col md="12" col="6">
                                <div className="about-nalivki-paragraph">
                                    <p> Skąd pewność, że zakochasz się w tym smaku? <br/>
                                        Stąd, że Nalewki z Galicji to: <br/>
                                        <br/>
                                        1. Unikatowe galicyjskie przepisy;<br/>
                                        2. Nowoczesne wyrobnictwo na własnej fabryce;<br/>
                                        3. Ekologiczne jagody, owocy, warzywa i zioła.<br/>
                                        <br/>
                                        Wybór na każdą okazje. <br/>
                                        Darmowa degustacja.<br/>
                                        <br/>
                                        Każda nalewka czy likier ma certyfikat ta znak jakości!</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
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

export default AboutSection;
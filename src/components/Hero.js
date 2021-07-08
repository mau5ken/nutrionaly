import React from "react"
import {Row, Col} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import '../styles/global.css'

export default (props) => (

        <div className="position-relative p-3 p-md-5 text-center hero-bg">
            <Fade bottom>
                <Row>
                    <Col xs={12} lg={5} style={{paddingTop: '8em'}} className="container">
                        <h5 className="text-justify display-4 hero-text">Nutrionaly</h5>
                        <p className="text-justify text-left pt-2 lead">Desbloqueando el poder de <br></br> la nutrición.</p>
                    </Col>
                    <Col xs={12} lg={7}>
                        <img src="https://res.cloudinary.com/craftwebs/image/upload/v1606646321/nu07r10y3/SVG%27S/nutri-girls-1.png" alt="nutrionaly"></img>
                    </Col>
                </Row>
            </Fade>
        </div>
    
)
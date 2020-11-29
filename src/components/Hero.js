import React from "react"
import {Row, Col} from "react-bootstrap"
import Fade from "react-reveal/Fade"

export default (props) => (

        <div class="position-relative p-3 p-md-5 text-center hero-bg">
            <Fade>
                <Row>
                    <Col xs={12} lg={5}>
                        <h1 className="text-justify">Nutrionaly</h1>
                        <h3 className="text-justify font-weight-normal">Desbloqueando el poder de la nutrición.</h3>
                    </Col>
                    <Col xs={12} lg={7}>
                        <img src="https://res.cloudinary.com/craftwebs/image/upload/v1606025045/nu07r10y3/PNG%27S/nutrionaly-v2.svg" alt="nutrionaly"></img>
                    </Col>
                </Row>
            </Fade>
        </div>
    
)
import React from "react"
import {Row, Col} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import '../styles/global'

export default (props) => (

    <Fade bottom>
        <Row>
            <Col xs={12} lg={6} className="blog_about">
                <img src="https://res.cloudinary.com/craftwebs/image/upload/v1606649064/nu07r10y3/SVG%27S/viegies-bowl.png"></img>
            </Col>

            <Col xs={12} lg={6}>
                <h1>¿Quiénes somos?</h1>
                <p>Somos equipo que constantemente está enseñando al mundo sobre cuidar la salud. Nos especializamos en el ámbito de la nutrición con una amplía gama de experiencia y estudio para mejorar la vida de las personas</p>
            </Col>
        </Row>
    </Fade>
)
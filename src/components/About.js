import React from "react"
import Fade from "react-reveal/Fade"
import '../styles/global.css'

export default (props) => (
    <section>

        <Fade bottom>
            <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "#F5A47F"}}>
                <div className="container">
                    <h2 className="text-center">Nuestros mas recientes blogs</h2>

                </div>
            </div>
        </Fade>
    </section>
)
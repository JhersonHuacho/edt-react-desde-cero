import React from 'react';
import PropTypes from 'prop-types';

//const Curso = props => (
const Curso = ({ title, image, price, profesor }) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {title}
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/4c86750c-af6a-4423-9748-54ad70f33a90.jpg" alt="foto" />
                        </div>
                    </div>
                    <span className="small">{profesor}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="http//ed.team">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontró título",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/4feb100b-5d47-4daf-b421-9983c5ecdfa8.png",
    price: "--",
    profesor: ""
}

export default Curso;
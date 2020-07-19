import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        console.log("1");
        super(props);

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarCorreo = this.cambiarCorreo.bind(this);
        this.cambiarFecha = this.cambiarFecha.bind(this);
    }

    cambiarNombre(event) {
        console.log("11");
        this.setState({ nombre: event.target.value });
    }

    cambiarCorreo(event) {
        this.setState({ correo: event.target.value });
    }

    cambiarFecha() {
        this.setState({ fecha: new Date() });
    }

    render() {
        if (this.state.nombre == "") {
            console.log("2");
        } else {
            console.log("22");
        }
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>{Math.ceil(this.state.fecha / 1000)}</h4>
                <form action="" id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item" >
                            <label htmlFor="">Nombre completo</label>
                            <input
                                type="text"
                                onChange={this.cambiarNombre}
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                onChange={this.cambiarCorreo}
                            />
                        </div>
                        {/* <div className="form__item">
                        <input className="button full" type="submit" value="Enviar" />
                        </div> */}
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    };

    componentDidMount() {
        console.log("3");
        let elemento = document.getElementById("elemento");
        console.log(elemento);

        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date());
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("33");
        console.log(prevProps);
        console.log(prevState);
        console.log("----------");
    }

    componentWillMount() {
        clearInterval(this.intervaloFecha);
    }
}

export default Formulario;